const express = require("express");
require("./config");
const Product = require("./Product");

const app = express();
app.use(express.json());

// Craete Data
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

// Read Data
app.get("/read", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

// Delete Data
app.delete("/delete/:_id", async (req, res) => {
  // console.log(req.params);
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

// Update Data
app.put("/update/:_id", async (req, res) => {
  // console.log(req.params);
  let data = await Product.updateOne(req.params, { $set: req.body });
  res.send(data);
});
app.listen(4500);
