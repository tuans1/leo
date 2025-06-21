import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql", //uri specifies the URL of our GraphQL server.
  cache: new InMemoryCache(), //is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
});
