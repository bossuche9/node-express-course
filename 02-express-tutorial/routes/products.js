const express = require("express");
const router = express.Router();
let { products } = require("../data");
const { getProducts, findProducts } = require("../controllers/products");

router.get("/", getProducts);

router.get("/:productID", findProducts);

module.exports = router;
