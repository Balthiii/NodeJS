import express from "express";
import shopController from "../controllers/shop.js";
const router = express.Router();

router.get('/addproduct', shopController.getAddProduct);


export default router;
