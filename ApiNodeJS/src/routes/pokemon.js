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

/**
 * @swagger
 * /pokemon:
 *   get:
 *     summary: Récupère la liste des pokémons
 */
// GET http://localhost:3000/pokemon
router.get("/", getPokemons);


/**
 * @swagger
 * /pokemon/{id}:
 *   get:
 *     summary: Récupère un Pokémon spécifique par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon
 *         schema:
 *           type: string
 */
router.get("/:id", getPokemon);



/**
 * @swagger
 * /pokemon:
 *   post:
 *     summary: Crée un nouveau Pokémon.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - Type
 *               - Size
 *               - Talent
 *               - Weight
 *               - Description
 *             properties:
 *               Name:
 *                 type: string
 *                 description: Le nom du Pokémon, doit contenir au moins 3 caractères.
 *               Type:
 *                 type: string
 *                 description: Le type du Pokémon, doit être l'un des types prédéfinis.
 *               Size:
 *                 type: string
 *                 description: La taille du Pokémon.        
 *               Talent:           
 *                 type: string      
 *                 description: Le talent du Pokémon.      
 *               Weight:         
 *                 type: number      
 *                 description: Le poids du Pokémon.   
 */

// POST http://localhost:3000/pokemon
router.post(
  "/",
  [
    body("Name").isLength({min: 3, }).withMessage("Le nom doit contenir au moins 3 caractères"),
    body("Type").isIn(["Normal", "Feu", "Eau", "Électrique", "Plante", "Glace", "Combat", "Poison", "Sol", "Vol", "Psy", "Insecte", "Roche", "Spectre", "Dragon", "Ténèbres", "Acier", "Fée"])
    .withMessage("Ce type n'existe pas")
  ],
  validateType, createPokemon
);

/**
 * @swagger
 * /pokemon/{id}:
 *   put:
 *     summary: Met à jour un Pokémon existant.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon à mettre à jour.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: Le nom du Pokémon.
 *               Type:
 *                 type: string
 *                 description: Le type du Pokémon.
 *               Size:
 *                 type: string
 *                 description: La taille du Pokémon.
 *               Talent:
 *                 type: string
 *                 description: Le talent du Pokémon.
 *               Weight:
 *                 type: number
 *                 description: Le poids du Pokémon.
 */
// PUT http://localhost:3001/pokemon/1 creer une route qui permet de mettre à jour un pokemon
router.put("/:id", udpatePokemon);

/**
 * @swagger
 * /pokemon/{id}:
 *   delete:
 *     summary: Supprime un Pokémon existant.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon à supprimer.
 *         schema:
 *           type: string
 */
router.delete("/:id", deletePokemon);
// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;