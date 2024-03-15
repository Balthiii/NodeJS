import express from "express";
import shopController from "../controllers/shop.js";
const router = express.Router();



router.get('/', shopController.getAddProduct);

router.post('/', shopController.postAddProduct);

// router.get('/', shopController.getIndex);

export default router;
