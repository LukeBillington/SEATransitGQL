import NodeCache from "node-cache";

const cache = new NodeCache({
  checkperiod: 3600,
  stdTTL: 86400
});

export default cache;
