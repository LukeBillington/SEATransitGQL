import { getAgency } from "../Agency/Agency.controller";
import { getRouteStops } from "../Stop/Stop.controller";
import { getRouteTrips } from "../Trip/Trip.controller";

export default {
  agency: ({ agencyId }: any) => getAgency(agencyId),
  stops: ({ id }: any) => getRouteStops(id),
  trips: ({ id }: any) => getRouteTrips(id)
};
