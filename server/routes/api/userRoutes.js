const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async (req, res) => {
   try {

       const newUser = await User.create({
           email: req.body.email,
           password: req.body.password,
       });

       if (newUser) {
           await req.session.save(() => {
           req.session.userId = newUser.id;
           req.session.email = newUser.email;
           req.session.password = newUser.password;
           req.session.loggedIn = true;

           res.json(newUser);
       })};
   } catch (err) {
       res.status(500).json(err);
   }
});

router.post('/login', async (req, res) => {
   try {

        const user = await User.findOne({
           where: {
               email: req.body.email,
           },
       });

       if (!user) {
           res.status(400).json({ message: 'No user account found!' });
           return;
       }

       let validPassword = user.checkPassword(req.body.password);

       if (!validPassword) {
           res.status(400).json({ message: 'No user account found!' });
           return;
       } else {
           console.log('You are now logged in!')
       };

       req.session.save(() => {
           req.session.userId = user.id;
           req.session.email = user.email;
           req.session.loggedIn = true;

           res.json({ user, message: 'You are now logged in!' });
       })
    } catch (err) {
       res.status(400).json({ message: 'No user account found!' });
   }
})

router.post('/logout', async (req, res) => {
  if(req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      })
  } else {
      res.status(404).end();
  }
});

module.exports = router;
