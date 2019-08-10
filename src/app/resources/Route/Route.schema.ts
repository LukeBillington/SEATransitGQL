import { gql } from "apollo-server";

export default gql`
  type Route {
    id: ID!
    agency: Agency
    stops: [Stop]
    trips: [Trip]
    shortName: String
    longName: String
    description: String
    type: String
    url: String
    color: String
    textColor: String
  }
`;
