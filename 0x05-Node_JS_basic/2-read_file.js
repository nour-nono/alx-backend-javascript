// const fs = require('fs');

// function countStudents(path) {
//   if (!fs.existsSync(path)) {
//     throw Error('Cannot load the database');
//   }
//   // block other parallel process
//   // and do the current file reading process
//   const data = fs.readFileSync(path, 'utf8');
//   const students = data.split('\n')
//     .map((student) => student.split(','))
//     .filter((student) => student.length === 4 && student[0] !== 'firstname')
//     .map((student) => ({
//       firstName: student[0],
//       lastName: student[1],
//       age: student[2],
//       field: student[3],
//     }));
//   const csStudents = students
//     .filter((student) => student.field === 'CS')
//     .map((student) => student.firstName);
//   const sweStudents = students
//     .filter((student) => student.field === 'SWE')
//     .map((student) => student.firstName);
//   console.log(`Number of students: ${students.length}`);
//   console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
//   console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
// }
const { readFileSync } = require("node:fs");
const countStudents = (path) => {
  let file;
  try {
    file = readFileSync(path, "utf8");
  } catch (e) {
    throw new Error("Cannot load the database");
  }
  const lines = file.trim().split("\n");
  lines.shift();
  console.log(`Number of students: ${lines.length}`);
  const answer = {};
  lines.forEach((l) => {
    const fields = l.trim().split(",");
    if (answer[fields[3]]) {
      if (fields.length == 4) {
        answer[fields[3]].push(fields[0]);
      }
    } else {
      answer[fields[3]] = [fields[0]];
    }
  });
  Object.entries(answer).forEach(([k, v]) => {
    console.log(
      `Number of students in ${k}: ${v.length}. List: ${v.join(", ")}`
    );
  });
};

module.exports = countStudents;
