import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const productRoute = Router()

productRoute.get("/", ProductController.getproducts)
productRoute.get("/:id", ProductController.getProductById)
productRoute.get("/category/:cat", ProductController.getProductsByCategory)
productRoute.get("/filter/:cat", ProductController.getProductByFilter)

export {productRoute}