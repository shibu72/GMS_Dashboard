import express from "express";
import cors from 'cors'
import userRoutes from "./src/app/modules/user/user.route.js";
import productRoutes from "./src/app/modules/product/product.route.js"
const app = express();
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server running successfully");
});

app.use("/api", userRoutes, productRoutes);

export default app;
