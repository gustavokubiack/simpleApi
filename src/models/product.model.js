const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  typeProduct: String,
});

module.exports = mongoose.model("Product", productSchema, "products");
