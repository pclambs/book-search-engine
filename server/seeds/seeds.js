const connection = require ('../config/connection')
const { User } = require ('../models')

connection.once('open', async () => {
  await User.deleteMany()
  await User.create({
    username: 'Paul',
    email: 'pchucklambs@gmail.com',
    password: 'beepboop',
  })
  console.log('users seeded')
  process.exit(0)
})