const weakMap = new WeakMap();
let count = 0;

function queryAPI(endpoint) {
  weakMap.set(endpoint, count += 1);
  const callsNum = weakMap.get(endpoint);
  if (callsNum >= 5) {
    throw new Error('Endpoint load is high.');
  }
}

export { weakMap, queryAPI };
