import cache from "../../cache";
import client from "../../client";
import { IRoute } from "./Route.types";

export const getAgencyRoutes = async (
  agencyId: string
): Promise<IRoute[] | undefined> => {
  const endpoint = `routes-for-agency/${agencyId}`;
  let results: any = cache.get(endpoint);
  if (results === undefined) {
    try {
      const call = await client.get(endpoint);
      results = call.data;
      cache.set(endpoint, results);
    } catch (err) {
      throw new Error(err);
    }
  }

  if (results.data && results.data.length > 0) {
    const routes = results.data[0].list[0].route.map((route: any) => {
      const output = Object.assign(route);
      Object.keys(output).forEach((key: string) => {
        output[key] = output[key][0];
      });
      return output;
    });
    return routes;
  }

  return undefined;
};

export const getRoute = async (id: string): Promise<IRoute | undefined> => {
  const endpoint = `route/${id}`;
  let results: any = cache.get(endpoint);
  if (results === undefined) {
    try {
      const call = await client.get(endpoint);
      results = call.data;
      cache.set(endpoint, results);
    } catch (err) {
      throw new Error(err);
    }
  }

  if (results.data && results.data.length > 0) {
    const route = results.data[0].entry[0];
    Object.keys(route).forEach((key: string) => {
      route[key] = route[key][0];
    });
    return route;
  }
  return undefined;
};
