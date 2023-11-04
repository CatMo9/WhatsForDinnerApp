const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/firstConnection", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("yup");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
