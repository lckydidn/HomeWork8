const pool = require("../config/config.js");
const fs = require("fs");

const seedQuery = fs.readFileSync("seeding/seed.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
  console.log(err);
  console.log("Selesai menambahkan data baru");
  pool.end();
});
