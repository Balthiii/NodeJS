import express from "express";
import shopController from "../controllers/shop.js";
const router = express.Router();

//router.get('/', shopController.getIndex);

router.get('/shop', shopController.getProducts);
//router.get('/', shopController.getProduct);
router.get("/products/:productId", shopController.getProduct);

export default router;
