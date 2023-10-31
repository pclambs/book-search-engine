export const schema = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    books: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]
    books: [Book]
  }
`