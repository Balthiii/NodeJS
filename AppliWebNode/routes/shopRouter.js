import express from "express";
import shopController from "../controllers/shop.js";
const router = express.Router();

//router.get('/', shopController.getIndex);

router.get('/shop', shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/addproduct", shopController.getAddProduct);

router.post("/addproduct", shopController.postAddProduct);

export default router;
