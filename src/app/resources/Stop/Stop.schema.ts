import { gql } from "apollo-server";

export default gql`
  type Stop {
    id: ID!
    name: String!
    lat: String!
    lon: String!
    direction: String
    code: String
    locationType: String
    wheelchairBoarding: String
  }
`;
