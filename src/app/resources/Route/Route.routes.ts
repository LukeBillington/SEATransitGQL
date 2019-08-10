import { Request, Response, Router } from "express";
import { getRouteStops } from "../Stop/Stop.controller";
import { getRouteTrips } from "../Trip/Trip.controller";
import { getRoute } from "./Route.controller";

const routes = Router();

routes.get("/:id/stops", async (req: Request, res: Response) => {
  try {
    res.send(await getRouteStops(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

routes.get("/:id/trips", async (req: Request, res: Response) => {
  try {
    res.send(await getRouteTrips(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

routes.get("/:id", async (req: Request, res: Response) => {
  try {
    res.send(await getRoute(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

export default routes;
