import { Request, Response, Router } from "express";
import { getStop } from "./Stop.controller";

const routes = Router();

routes.get("/:id", async (req: Request, res: Response) => {
  try {
    res.send(await getStop(req.params.id));
  } catch (err) {
    res.send(err);
  }
});

export default routes;
