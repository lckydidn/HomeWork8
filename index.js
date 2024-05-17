const express = require("express");
const app = express();
const pool = require("./config/config.js");
const queries = require("./routes/queries.js");

app.get("/", function (req, res) {
  res.send("hello test le!");
});

pool.connect((err, res) => {
  console.log(err);
  console.log("terhubung dengan DB");
});

app.use("/queries", queries);
app.listen(3000);
