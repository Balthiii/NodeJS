import express from "express";
import {
  createPokemon,
  deletePokemon,
  getPokemon,
  getPokemons,
  udpatePokemon,
} from "../controller/pokemonController.js";

import { body, validationResult } from "express-validator";

const validateType = (req, res, next) => {
const error = validationResult(req, res, next);
if (!error.isEmpty()) {
  return res.status(400).json({ errors: error.array()[0].msg});
}
next();
};

const router = express.Router();
// GET http://localhost:3001/pokemon
router.get("/", getPokemons);

// GET http://localhost:3001/pokemon/1
router.get("/:id", getPokemon);

// POST http://localhost:3001/pokemon
router.post(
  "/",
  [
    body("Name").isLength({min: 3, }).withMessage("Le nom doit contenir au moins 3 caractères"),
    body("Type").isIn(["Normal", "Feu", "Eau", "Électrique", "Plante", "Glace", "Combat", "Poison", "Sol", "Vol", "Psy", "Insecte", "Roche", "Spectre", "Dragon", "Ténèbres", "Acier", "Fée"])
    .withMessage("Ce type n'existe pas")
  ],
  validateType, createPokemon
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