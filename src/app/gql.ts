import { ApolloServer } from "apollo-server-express";

import { Agency, Query, Route, Stop, Trip } from "./resources";

const typeDefs = [
  Agency.schema,
  Query.schema,
  Route.schema,
  Stop.schema,
  Trip.schema
];

const resolvers = {
  Agency: Agency.resolver,
  Query: Query.resolver,
  Route: Route.resolver,
  Stop: Stop.resolver,
  Trip: Trip.resolver
};

const gql = new ApolloServer({
  resolvers,
  typeDefs
});

export default gql;
