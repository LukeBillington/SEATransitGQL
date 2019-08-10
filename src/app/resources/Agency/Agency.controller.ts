import cache from "../../cache";
import client from "../../client";
import { IAgency } from "./Agency.types";

export const getAgencies = async (): Promise<IAgency[] | undefined> => {
  const endpoint = "agencies-with-coverage";
  let results: any = cache.get(endpoint);
  if (results === undefined) {
    try {
      if (results === undefined) {
        const call = await client.get(endpoint);
        results = call.data;
        cache.set(endpoint, results);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  if (results.data && results.data.length > 0) {
    const references = results.data[0].references[0].agencies[0].agency.map(
      (agency: any) => {
        const output = Object.assign(agency);
        Object.keys(output).forEach((key: string) => {
          output[key] = output[key][0];
        });
        return output;
      }
    );
    const list = results.data[0].list[0].agencyWithCoverage.map(
      (agency: any) => {
        const output = Object.assign(agency);
        Object.keys(output).forEach((key: string) => {
          output[key] = output[key][0];
        });
        return output;
      }
    );
    const agencies = list.map((agency: any) => {
      const matchedReference = references.find(
        (reference: any) => reference.id === agency.agencyId
      );
      const output = { ...agency, ...matchedReference };
      delete output.agencyId;
      return output;
    });
    return agencies;
  }
  return undefined;
};

export const getAgency = async (id: string): Promise<IAgency | undefined> => {
  const results = await getAgencies();
  if (results) {
    return results.find((result: IAgency) => result.id === id);
  }
};
