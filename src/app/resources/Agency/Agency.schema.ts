import { gql } from "apollo-server";

export default gql`
  type Agency {
    id: ID!
    routes: [Route]
    name: String!
    lat: String!
    lon: String!
    latSpan: String!
    lonSpan: String!
    url: String!
    timezone: String!
    lang: String
    phone: String
    privateService: String
    disclaimer: String
  }
`;
