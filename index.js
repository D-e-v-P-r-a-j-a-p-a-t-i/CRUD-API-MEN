const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/products.routes");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//router
app.use(router)

mongoose
  .connect(
    "mongodb+srv://p8563640:Dev1312mongodbatlas@cluster0.qh8dz4v.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen("3099", () => {
      console.log("Server is Serving on port 3099");
    });
  })
  .catch((error) => {
    console.log(error);
  });


