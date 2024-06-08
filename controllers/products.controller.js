const path = require("path");

const homePage = (req, res) => {
  const directory = path.dirname(__dirname);
  res.sendFile(path.join(directory, "index.html"));
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!(await Product.findById(id))) {
      return res
        .status(404)
        .json({ message: `Product with id: ${id} doesn\'t exist!` });
    }
    await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(await Product.findById(id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!(await Product.findById(id))) {
      return res
        .status(404)
        .json({ message: `Product with id: ${id} doesn\'t exist!` });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).redirect(303, "/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  homePage,
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
