import express from "express";

import { Agency, Route, Stop, Trip } from "./resources";

const app = express();
app.use("/api/agencies", Agency.routes);
app.use("/api/routes", Route.routes);
app.use("/api/stops", Stop.routes);
app.use("/api/trips", Trip.routes);

export default app;
