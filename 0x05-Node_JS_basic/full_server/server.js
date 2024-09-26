/**
 * start express application server
 */
import express from 'express';
import router from './routes/index.js';
const port = 1245;
const app = express();
app.use('/', router);
app.listen(port);
export default app;
