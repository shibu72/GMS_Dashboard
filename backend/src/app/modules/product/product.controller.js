import productService from "./product.service.js";

const addProduct = async (req, res, next) => {
  try {
    const result = await productService.addProduct(req.body);
    res.status(200).json({
      message: "Product created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const result = await productService.getAllProducts();
    console.log(result);

    res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProduct({ _id: id });

    console.log("data deleted", result);
    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const productController = {
  addProduct,
  getAllProducts,
  deleteProduct,
};

export default productController;
