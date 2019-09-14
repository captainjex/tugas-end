import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Halo ini graphql yoga !'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('Server is running...')
})
