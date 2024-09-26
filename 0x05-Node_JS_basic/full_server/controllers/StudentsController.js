/**
 * Student controller class
 */
import readDatabase from '../utils';

// class StudentsController {
//   static async getAllStudents(request, response) {
//     try {
//       const filepath = process.argv.length > 2 ? process.argv[2] : '';
//       const records = await readDatabase(filepath);
//       const fields = Object.keys(records);
//       fields.sort((x, y) => {
//         if (x < y) return -1;
//         if (x > y) return 1;
//         return 0;
//       });
//       response.statusCode = 200;
//       response.write('This is the list of our students\n');
//       for (const field of fields) {
//         response.write(`Number of students in ${field}: ${records[field].length}. List: ${records[field].join(', ')}`);
//         if (fields.indexOf(field) !== fields.length - 1) response.write('\n');
//       }
//     } catch (err) {
//       response.statusCode = 500;
//       response.write(err.message);
//     }
//     response.end();
//   }

//   static async getAllStudentsByMajor(request, response) {
//     const { major } = request.params;
//     if (['CS', 'SWE'].indexOf(major.toUpperCase()) === -1) {
//       response.statusCode = 500;
//       response.send('Major parameter must be CS or SWE');
//     } else {
//       const filepath = process.argv.length > 2 ? process.argv[2] : '';
//       try {
//         const records = await readDatabase(filepath);
//         response.statusCode = 200;
//         response.write(`List: ${records[major.toUpperCase()].join(', ')}`);
//       } catch (err) {
//         response.statusCode = 500;
//         response.write(err.message);
//       }
//       response.end();
//     }
//   }
// }
class StudentsController {
  static async getAllStudents(req, res) {
    res.statusCode = 200;
    const filepath = process.argv.length > 2 ? process.argv[2] : '';
    let data = '';
    try {
      data = await readDatabase(filepath);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.message);
      return;
    }
    res.write(`This is the list of our students\n`);
    const fields = Object.keys(data);
    fields.sort();
    fields.forEach((field) => {
      res.write(
        `Number of students in ${field}: ${data[field].length}. List: ${data[
          field
        ].join(', ')}\n`
      );
      res.end();
    });
  }
  static async getAllStudentsByMajor(req, res) {
    res.statusCode = 200;
    const filepath = process.argv.length > 2 ? process.argv[2] : '';
    const major = req.params.major;
    if (major.toUpperCase() !== 'CS' && major.toUpperCase() !== 'SWE') {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
      return;
    }
    let data = '';
    try {
      data = await readDatabase(filepath);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.message);
      return;
    }
    const students = data[major.toUpperCase()];
    res.write(`List: ${students.join(', ')}`);
  }
}

export default StudentsController;
