import { Request, Response, Router } from "express";
import { getTrip } from "./Trip.controller";

const routes = Router();

routes.get("/trip/:id", async (req: Request, res: Response) => {
  try {
    res.send(await getTrip(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

export default routes;
