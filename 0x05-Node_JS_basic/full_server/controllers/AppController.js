/**
 * Application controller
 */
// class AppController {
//   static getHomepage(request, response) {
//     response.statusCode = 200;
//     response.send("Hello Holberton School!");
//   }
// }
// export default AppController;
class AppController {
  static getHomepage(req, res) {
    res.statusCode = 200;
    res.send('Hello Holberton School!');
  }
}
export default AppController;
