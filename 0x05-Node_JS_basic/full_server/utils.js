/**
 * Reads file asynchronously and prepares a report with the data from a csv file
 */
import fs from 'fs';

// function readDatabase(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (err, records) => {
//       if (err) reject(new Error('Cannot load the database'));
//       else {
//         const content = records.split('\n');
//         content.splice(0, 1);
//         const report = {};
//         content.forEach((record) => {
//           const line = record.split(',');
//           if (line[3] && line[0]) {
//             if (Object.keys(report).indexOf(line[3]) === -1) {
//               report[line[3]] = [line[0]];
//             } else {
//               (report[line[3]]).push(line[0]);
//             }
//           }
//         });
//         resolve(report);
//       }
//     });
//   });
// }
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      }
      const answer = {};
      const lines = data.trim().split('\n');
      lines.shift();
      lines.forEach((line) => {
        const [fname, , , field] = line.trim().split(',');
        if (name && field) {
          answer[field] ? answer[field].push(fname) : (answer[field] = [fname]);
        }
      });
      resolve(answer);
    });
  });
}
export default readDatabase;
