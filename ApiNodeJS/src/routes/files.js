import express from "express";
import { uploadImage } from "../controller/file.js";

const router = express.Router();

router.post("/image", uploadImage);

export default router;