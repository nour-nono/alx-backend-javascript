export default function getStudentIdsSum(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }
  return arrOfObj.filter((acc, cur) => acc.id + cur.id);
}
