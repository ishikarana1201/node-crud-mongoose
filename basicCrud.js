const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

// Create product schema to define fields
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
});

const createData = async () => {
  // Create model to connect node with mongodb
  const Product = mongoose.model("products", ProductSchema);

  // Insert data - Create data
  let data = new Product({
    name: "M21",
    price: 100,
    brand: "A Series",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
// createData();

const updateData = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "teajgde" },
    { $set: { price: 10 } }
  );
  console.log(data);
};
// updateData();

const deleteData = async()=>{
  const Product = mongoose.model("products", ProductSchema);
    let data = await Product.deleteOne({name:"teajgde"});
    console.log(data);
}
// deleteData();

const getData = async()=>{
    const Product = mongoose.model("products", ProductSchema);
      let data = await Product.find();
      console.log(data);
  }
  getData();