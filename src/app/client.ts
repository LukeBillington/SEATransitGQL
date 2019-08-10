import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { parseString } from "xml2js";

const client = axios.create({
  baseURL: "https://api.pugetsound.onebusaway.org/api/where"
});

client.interceptors.request.use((reqConfig: AxiosRequestConfig) => {
  reqConfig.params = {
    ...reqConfig.params,
    key: process.env.OBA_KEY
  };
  reqConfig.url = `${reqConfig.url}.xml`;
  return reqConfig;
});

client.interceptors.response.use((res: AxiosResponse<any>) => {
  parseString(res.data, (err, result) => {
    res.data = result.response;
  });
  return res;
});

export default client;
