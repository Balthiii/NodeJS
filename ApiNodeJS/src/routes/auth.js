import express from "express";
import { signin, signup } from "../controller/authController.js";

// import { body } from 'express-validator';

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;