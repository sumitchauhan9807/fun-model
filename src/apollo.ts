import { ApolloClient, InMemoryCache } from '@apollo/client';
const PRODUCTION = true
const url = PRODUCTION ? 'https://api.globalfun.cam/graphql' : 'http://localhost:4000/graphql'
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client