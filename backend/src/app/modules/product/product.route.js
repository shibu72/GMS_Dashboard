import express from "express";
import productController from "./product.controller.js";
const router = express.Router();
router.post("/product", productController.addProduct);
router.get("/product/getAll", productController.getAllProducts);
router.delete("/product/:id", productController.deleteProduct);

const productRoutes = router;
export default productRoutes;
