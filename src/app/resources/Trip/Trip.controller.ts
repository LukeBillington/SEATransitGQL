import client from "../../client";
import { ITrip } from "./Trip.types";

const formatReference = (trip: any) => {
  const output = Object.assign(trip);
  Object.keys(output).forEach((key: string) => {
    output[key] = output[key][0];
  });
  delete output.serviceId;
  delete output.shapeId;
  delete output.blockId;
  delete output.situationIds;
  return output;
};

const formatList = (trip: any) => {
  const output = Object.assign(trip.status[0]);
  Object.keys(output).forEach((key: string) => {
    if (key === "position") {
      const formattedPosition = Object.assign(output[key][0]);
      Object.keys(formattedPosition).forEach((positionKey: any) => {
        formattedPosition[positionKey] = formattedPosition[positionKey][0];
      });
      output[key] = formattedPosition;
    } else {
      output[key] = output[key][0];
    }
  });
  delete output.vehicleID;
  return output;
};

export const getRouteTrips = async (routeId: string): Promise<ITrip[]> => {
  try {
    const results = await client.get(`trips-for-route/${routeId}`, {
      params: { includeStatus: true }
    });
    const references = results.data.data[0].references[0].trips[0].trip.map(
      formatReference
    );
    const list = results.data.data[0].list[0].tripDetails.map(formatList);
    return list.map((trip: any) => {
      const matchedReference = references.find(
        (reference: any) => reference.id === trip.activeTripId
      );
      const output = { ...trip, ...matchedReference };
      delete output.activeTripId;
      return output;
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getTrip = async (id: string): Promise<ITrip> => {
  try {
    const results = await client.get(`trip-details/${id}`);
    const reference = formatReference(
      results.data.data[0].references[0].trips[0].trip[0]
    );
    const list = formatList(results.data.data[0].entry[0]);
    const output = { ...list, ...reference };
    delete output.activeTripId;
    return output;
  } catch (err) {
    throw new Error(err);
  }
};
