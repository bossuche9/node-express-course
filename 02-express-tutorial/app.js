const express = require("express");
const { products } = require("./data");

const app = express();

//setup static and middleware
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "it worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  //console.log(req);
  // console.log(req.params);
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  const { search, limit, maxPrice } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (maxPrice) {
    sortedProducts = sortedProducts.filter(
      (product) => product.price < Number(maxPrice)
    );
  }
  if (sortedProducts.length < 1) {
    res.status(200).json({ message: "no product matched the search " });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
