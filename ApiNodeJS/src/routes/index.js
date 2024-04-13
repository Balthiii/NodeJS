import { Router } from "express";

import authRouter from "./auth.js";
import pokemonRouter from "./pokemon.js";
import fileRouter from "./files.js";
const router = Router();

router.use("/auth", authRouter);

router.use("/pokemon",pokemonRouter);

router.use("/uploads", fileRouter);

export default router;