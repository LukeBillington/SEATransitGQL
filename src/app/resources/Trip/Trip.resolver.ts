import { getRoute } from "../Route/Route.controller";
import { getStop } from "../Stop/Stop.controller";

export default {
  closestStop: ({ closestStop }: any) => getStop(closestStop),
  nextStop: ({ nextStop }: any) => getStop(nextStop),
  route: ({ routeId }: any) => getRoute(routeId)
};
