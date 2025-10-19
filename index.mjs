import express from 'express'

const app = express();
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port: ${PORT}`);
  }
});