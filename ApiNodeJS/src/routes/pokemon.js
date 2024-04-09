import express from "express";
import {
  createPokemon,
  deletePokemon,
  getPokemon,
  getPokemons,
  udpatePokemon,
  getError,
} from "../controller/pokemonController";

const router = express.Router();
import { body } from "express-validator";

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

// ERROR
router.get("/error", getError);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;