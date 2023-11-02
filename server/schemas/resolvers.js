const { User } = require('../models')

module.exports = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new Error('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (partent, { email, password }, context, index) => {
      const user = await User.findOne({ email });
      console.log(user)
    }
  }
}