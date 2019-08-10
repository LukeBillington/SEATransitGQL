import { Request, Response, Router } from "express";
import { getAgencyRoutes } from "../Route/Route.controller";
import { getAgencies, getAgency } from "./Agency.controller";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  try {
    res.send(await getAgencies());
  } catch (err) {
    res.send(err);
  }
});

routes.get("/:id/routes", async (req: Request, res: Response) => {
  try {
    res.send(await getAgencyRoutes(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

routes.get("/:id", async (req: Request, res: Response) => {
  try {
    res.send(await getAgency(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

export default routes;
