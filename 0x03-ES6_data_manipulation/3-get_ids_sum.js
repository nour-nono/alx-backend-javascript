export default function getStudentIdsSum(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }
  return arrOfObj.reduce((acc, cur) => acc + cur.id, 0);
}
