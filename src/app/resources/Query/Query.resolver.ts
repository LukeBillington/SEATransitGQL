import { getAgencies, getAgency } from "../Agency/Agency.controller";
import { getRoute } from "../Route/Route.controller";
import { getStop } from "../Stop/Stop.controller";
import { getTrip } from "../Trip/Trip.controller";

export default {
  agencies: (root: any) => getAgencies() as any,
  agency: (root: any, { id }: any) => getAgency(id),
  route: (root: any, { id }: any) => getRoute(id),
  stop: (root: any, { id }: any) => getStop(id),
  trip: (root: any, { id }: any) => getTrip(id)
};
