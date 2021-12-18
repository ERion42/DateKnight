const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path')
const sequelize = require('./config/connection')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const corsOptions = {
    origin: 'http://localhost:3001'
};
const sess = {
    secret: process.env.COOKIE,
    cookie: {
        maxAge: 86400,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
})
