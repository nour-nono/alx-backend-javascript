export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    const idx = array.indexOf(val);
    array[idx] = appendString + val;
  }

  return array;
}
