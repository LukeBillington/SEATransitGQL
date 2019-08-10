import { gql } from "apollo-server";

export default gql`
  type Trip {
    id: ID!
    route: Route
    tripShortName: String
    tripHeadsign: String
    directionId: String
    blockTripSequence: String!
    serviceDate: String!
    frequency: String
    scheduledDistanceAlongTrip: String
    totalDistanceAlongTrip: String!
    position: String
    orientation: String
    closestStop: Stop!
    closestStopTimeOffset: String!
    nextStop: Stop
    nextStopTimeOffset: String
    phase: String!
    status: String!
    predicted: String!
    lastUpdateTime: String!
    lastLocationUpdateTime: String!
    lastKnownLocation: String
    lastKnownDistanceAlongTrip: String
    distanceAlongTrip: String
    scheduleDeviation: String!
  }
`;
