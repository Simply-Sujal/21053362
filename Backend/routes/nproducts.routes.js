const express = require("express");
const { getProducts } = require("../controllers/allproducts.controllers");

const router = express.Router();

router.get("/categories/:category/products", getProducts);

module.exports = router;
