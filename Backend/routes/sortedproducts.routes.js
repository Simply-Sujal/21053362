const express = require("express");
const { sortProducts } = require("../controllers/sortingproducts.controllers");

const router = express.Router();

router.get("/products", sortProducts);

module.exports = router;
