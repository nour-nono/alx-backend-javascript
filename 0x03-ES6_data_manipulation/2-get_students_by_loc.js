export default function getStudentsByLocation(arrOfObj, city) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }
  return arrOfObj.filter((e) => e.location == city);
}
