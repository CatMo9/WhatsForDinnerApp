const app = require("./server/app.js");
// const db = require('./db');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`What's For Dinner is listening on ${port}`);
});
