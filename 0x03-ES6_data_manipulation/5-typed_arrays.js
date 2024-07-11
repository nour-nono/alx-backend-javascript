export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // const newBuffer = new ArrayBuffer(length);
  // const newView = new DataView(newBuffer, 0, length);
  // const newArray = new Int8Array(newBuffer);
  // newArray[position] = value;
  // return newView;
  const myArr = new ArrayBuffer(length);
  const view = new Int8Array(myArr);
  view[position] = value;
  return new DataView(myArr);
}
