const { User } = require('../models')
const { signToken } = require('../utils/auth')
const { GraphQLError } = require('graphql')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new GraphQLError("Login required")
    },
  },
  Mutation: {
    login: async (partent, { email, password }, context, index) => {
      const user = await User.findOne({ email })
      // console.log(user)
      if (!user) {
        throw new GraphQLError("No user detected")
      }
    
      const verifiedPass = await user.isCorrectPassword(password)
      // console.log(verifiedPass)
      if (!verifiedPass) {
        throw new GraphQLError("Password not verified")
      }

      const token = signToken(user)
      return { token, user }
    }
  },
}

module.exports = resolvers