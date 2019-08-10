import { getAgencyRoutes } from "../Route/Route.controller";

export default {
  routes: ({ id }: any) => getAgencyRoutes(id)
};
