import { ApolloClient, InMemoryCache , HttpLink , ApolloLink } from '@apollo/client';
const PRODUCTION = true
const url = PRODUCTION ? 'https://api.globalfun.cam/graphql' : 'http://localhost:4000/graphql'
const sfuUrl  =  PRODUCTION ? 'https://sfu.globalfun.cam/graphql' : "http://localhost:4001/graphql"

const mainServer = new HttpLink({
  uri: url,
});

const sfuServer = new HttpLink({
  uri: sfuUrl,
});

const client = new ApolloClient({
  link: ApolloLink.split(
      operation => operation.getContext().apiName === 'sfu', // boolean check
      sfuServer,  // if fa
      mainServer, // if true
      
  ),
  cache: new InMemoryCache()
});


// const client = new ApolloClient({
//   uri: url,
//   cache: new InMemoryCache(),
// });

export default client