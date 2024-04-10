import { Router } from "express";

import authRouter from "./auth.js";
import pokemonRouter from "./pokemon.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/pokemon",pokemonRouter);

export default router;