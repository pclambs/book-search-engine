const { User } = require('../models')

module.exports = {
  Query: {
    users: async () => {
      return await User.find({})
    },
  },
}