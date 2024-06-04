export default function updateStudentGradeByCity(arrOfObj, city, newGrades) {
  const students = arrOfObj.filter((student) => student.location === city);
  const studentsIdMap = new Map(
    students.map((student) => [student.id, student]),
  );
  newGrades.forEach((newGrade) => {
    if (studentsIdMap.has(newGrade.studentId)) {
      studentsIdMap.get(newGrade.studentId).grade = newGrade.grade || 'N/A';
    }
  });
  for (const student of studentsIdMap.values()) {
    student.grade = student.grade || 'N/A';
  }
  return Array.from(studentsIdMap.values());
}
