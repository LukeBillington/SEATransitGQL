export interface ITrip {
  id: string;
  routeId: string;
  tripShortName?: string;
  tripHeadsign?: string;
  directionId?: string;
  blockTripSequence: string;
  serviceDate: string;
  frequency?: string;
  scheduledDistanceAlongTrip?: string;
  totalDistanceAlongTrip: string;
  position?: string;
  orientation?: string;
  closestStop: string;
  closestStopTimeOffset: string;
  nextStop?: string;
  nextStopTimeOffset?: string;
  phase: string;
  status: string;
  predicted: string;
  lastUpdateTime: string;
  lastLocationUpdateTime: string;
  lastKnownLocation?: string;
  lastKnownDistanceAlongTrip?: string;
  lastKnownOrientation?: string;
  distanceAlongTrip?: string;
  scheduleDeviation: string;
}
