import express from "express";
import {
  createPokemon,
  deletePokemon,
  getPokemon,
  getPokemons,
  udpatePokemon,
} from "../controller/pokemonController.js";

import { body } from "express-validator";

const router = express.Router();
// GET http://localhost:3001/pokemon
router.get("/", getPokemons);

// GET http://localhost:3001/pokemon/1
router.get("/:id", getPokemon);

// POST http://localhost:3001/pokemon
router.post(
  "/",
  [
    body("Name").trim().isLength({ max: 20, min: 2 }),
    body("Type").trim().isLength({ max: 15, min: 2 }),
  ],
  createPokemon
);

// PUT http://localhost:3001/pokemon/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", udpatePokemon);

// DELETE http://localhost:3001/pokemon/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deletePokemon);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;