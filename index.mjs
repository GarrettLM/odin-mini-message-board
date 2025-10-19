import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

import messagesRouter from './routes/messagesrouter.mjs';

const app = express();
const PORT = (process.env.PORT) ? process.env.PORT : 3000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', messagesRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port: ${PORT}`);
  }
});