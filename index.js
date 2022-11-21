const express = require("express");
require("./config");
const Product = require("./Product");
const multer = require("multer");
const app = express();
app.use(express.json());

// Create API
// app.post("/create", async (req, res) => {
//   let data = new Product(req.body);
//   let result = await data.save();
//   res.send(result);
// });

// // Read API
// app.get("/read", async (req, res) => {
//   let data = await Product.find();
//   res.send(data);
// });

// // Delete API
// app.delete("/delete/:_id", async (req, res) => {
//   let data = await Product.deleteOne(req.params);
//   res.send(data);
// });

// // Update API
// app.put("/update/:_id", async (req, res) => {
//   let data = await Product.updateOne(req.params, { $set: req.body });
//   res.send(data);
// });

// Search API
// app.get("/search/:key", async (req, res) => {
//   let data = await Product.find({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { brand: { $regex: req.params.key } },
//       { category: { $regex: req.params.key } },
//     ],
//   });
//   res.send(data);
// });

// File Upload API using Multer package
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload",upload, (req, res) => {
  res.send("File Upload");
});

app.listen(4500);
