import cache from "../../cache";
import client from "../../client";
import { IStop } from "./Stop.types";

export const getRouteStops = async (routeId: string): Promise<IStop[]> => {
  try {
    const endpoint = `stops-for-route/${routeId}`;
    let results: any = cache.get(endpoint);
    if (results === undefined) {
      const call = await client.get(endpoint);
      results = call.data;
      cache.set(endpoint, results);
    }
    const stops = results.data[0].references[0].stops[0].stop.map(
      (stop: any) => {
        const output = Object.assign(stop);
        Object.keys(output).forEach((key: string) => {
          if (key === "routeIds") {
            output[key] = output[key][0].string;
          } else {
            output[key] = output[key][0];
          }
        });
        return output;
      }
    );
    return stops;
  } catch (err) {
    throw new Error(err);
  }
};

export const getStop = async (id: string): Promise<IStop> => {
  try {
    const endpoint = `stop/${id}`;
    let results: any = cache.get(endpoint);
    if (results === undefined) {
      const call = await client.get(endpoint);
      results = call.data;
      cache.set(endpoint, results);
    }
    const stop = results.data[0].entry[0];
    Object.keys(stop).forEach((key: string) => {
      if (key === "routeIds") {
        stop[key] = stop[key][0].string;
      } else {
        stop[key] = stop[key][0];
      }
    });
    return stop;
  } catch (err) {
    throw new Error(err);
  }
};
