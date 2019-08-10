import { gql } from "apollo-server";

export default gql`
  type Query {
    agencies: [Agency]
    agency(id: ID!): Agency
    route(id: ID!): Route
    stop(id: ID!): Stop
    trip(id: ID!): Trip
  }
`;
