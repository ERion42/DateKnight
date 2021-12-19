const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');


const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        },
        me: async (parent, args, context) => {
            if(context.user) {
                const myData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                return myData;
            }

            throw new AuthenticationError('You need to be logged in to do that!')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);
            return { token, user }
        }
    }
}

module.exports = resolvers;
