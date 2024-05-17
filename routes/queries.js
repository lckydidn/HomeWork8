const express = require("express");
const pool = require("../config/config.js");
const router = express.Router();

// Dummy query buat ngecek aja
router.get("/", function (req, res) {
  pool.query("SELECT * FROM actor LIMIT 50", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});
// Menampilkan data seluruh list film
router.get("/films", function (req, res) {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});
// Menampilkan data film tertentu berdasarkan id
router.get("/films/:id", function (req, res) {
  const { id } = req.params;
  pool.query("SELECT * FROM film WHERE film_id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

// Menampilkan data list category
router.get("/categories", function (req, res) {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

// Menampilkan data list film berdasarkan category
router.get("/categories/:id/films", function (req, res) {
  const { id } = req.params;
  pool.query(
    "SELECT film.title, category.name FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.category_id = $1",
    [id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

module.exports = router;
