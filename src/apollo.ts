import { ApolloClient, InMemoryCache } from '@apollo/client';
const PRODUCTION = false
const url = PRODUCTION ? 'https://api.sneaky-paradise.com/graphql' : 'http://localhost:4000/graphql'
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client