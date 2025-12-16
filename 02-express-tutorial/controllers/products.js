const { products } = require("../data.js");

const getProducts = (req, res) => {
  res.json(products);
};

const findProducts = (req, res) => {
  //console.log(req);
  // console.log(req.params);
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  res.json(product);
};

module.exports = { getProducts, findProducts };
