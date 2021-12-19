const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });
    await server.start()
    server.applyMiddleware({ app });
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    };

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}



startServer()

// const express = require('express');
// require('dotenv').config();
// const cors = require('cors');
// const path = require('path')
// const sequelize = require('./config/connection')
// const session = require('express-session')
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;
// const corsOptions = {
//     origin: 'http://localhost:3001'
// };
// const sess = {
//     secret: process.env.COOKIE,
//     cookie: {
//         maxAge: 86400,
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// }

// app.use(session(sess));
// app.use(cors(corsOptions));

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use(require('./routes'));

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//         console.log(`App listening at http://localhost:${PORT}`);
//     });
// })
