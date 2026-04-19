const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [];

app.get("/", (req, res) => {
  res.send("Backend running 🔥");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/add-product", (req, res) => {
  const { name, price } = req.body;
  products.push({ name, price });
  res.send("Added");
});

app.listen(10000, () => console.log("Server running"));
