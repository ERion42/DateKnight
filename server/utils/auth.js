require('dotenv').config()
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ _id, email, username }) {
    const payload = { _id, email, username };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
