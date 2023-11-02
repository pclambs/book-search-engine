const { User } = require('../models')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new Error('Must be logged in.')
    },
  },
  Mutation: {
    login: async (partent, { email, password }, context, index) => {
      const user = await User.findOne({ email })
      console.log(user)
      if (!user) {
        throw new Error('Incorrect credentials')
      }
    
      const verifiedPass = await user.isCorrectPassword(password)
      console.log(verifiedPass)
      if (!verifiedPass) {
        throw new Error('Incorrect credentials')
      }
    }
  },
}

module.exports = resolvers