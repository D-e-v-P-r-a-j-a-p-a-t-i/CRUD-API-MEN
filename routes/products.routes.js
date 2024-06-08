const { homePage, getAllProducts, addProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/products.controller");

const express = require("express");

const router = express.Router();

router.get("/", homePage);

router.post("/addProduct", addProduct);

router.get("/getProducts", getAllProducts);

router.get("/getProduct/:id", getProductById);

router.put("/updateProduct/:id", updateProduct);

router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
