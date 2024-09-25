// const { readFile } = require('fs');

// function countStudents(fileName) {
//   const students = {};
//   const fields = {};
//   let length = 0;
//   return new Promise((resolve, reject) => {
//     readFile(fileName, (error, data) => {
//       if (error) {
//         reject(Error('Cannot load the database'));
//       } else {
//         const lines = data.toString().split('\n');
//         for (let i = 0; i < lines.length; i += 1) {
//           if (lines[i]) {
//             length += 1;
//             const field = lines[i].toString().split(',');
//             if (Object.prototype.hasOwnProperty.call(students, field[3])) {
//               students[field[3]].push(field[0]);
//             } else {
//               students[field[3]] = [field[0]];
//             }
//             if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
//               fields[field[3]] += 1;
//             } else {
//               fields[field[3]] = 1;
//             }
//           }
//         }
//         const l = length - 1;
//         console.log(`Number of students: ${l}`);
//         for (const [key, value] of Object.entries(fields)) {
//           if (key !== 'field') {
//             console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
//           }
//         }
//         resolve(data);
//       }
//     });
//   });
// }
const { readFile } = require('fs/promises');

const countStudents = async (path) => {
  const file = await readFile(path, 'utf8');
  if (!file) {
    throw new Error('Cannot load the database');
  }
  const lines = file.trim().split('\n');
  lines.shift();
  let output = `Number of students: ${lines.length}\n`;
  const answer = {};
  lines.forEach((l) => {
    const fields = l.trim().split(',');
    if (answer[fields[3]]) {
      if (fields.length == 4) {
        answer[fields[3]].push(fields[0]);
      }
    } else {
      answer[fields[3]] = [fields[0]];
    }
  });
  Object.entries(answer).forEach(([k, v]) => {
    output += `Number of students in ${k}: ${v.length}. List: ${v.join(
      ', '
    )}\n`;
  });
  return output.trim();
};

module.exports = countStudents;
