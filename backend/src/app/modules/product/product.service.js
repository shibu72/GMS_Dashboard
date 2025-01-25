import Product from "./product.model.js";

const addProduct = async (userData) => {
  const result = await Product.create(userData);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const deleteProduct = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const productService = {
  addProduct,
  getAllProducts,
  deleteProduct,
};

export default productService;
