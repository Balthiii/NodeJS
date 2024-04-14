import express from "express";
import {
  createPokemon,
  deletePokemon,
  getPokemon,
  getPokemons,
  udpatePokemon,
} from "../controller/pokemonController.js";
import { body, validationResult } from "express-validator";
import auth from "../Middlewares/auth.js";

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
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT  
 */

/**
 * @swagger
 * /pokemon:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Récupère la liste des pokémons
 *     responses:
 *       200:
 *         description: Affichage de la liste des pokémons executé avec succès
 *       404:
 *         description: La récupération des pokémons a échoué
 *   
 */
// GET http://localhost:3000/pokemon
router.get("/",auth, getPokemons);


/**
 * @swagger
 * /pokemon/{id}:
 *   get:
 *     security:
 *        - bearerAuth: []
 *     summary: Récupère un Pokémon spécifique par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Affichage du pokémon executé avec succès
 *       404:
 *         description: La récupération du pokémon a échoué
 */
router.get("/:id",auth, getPokemon);



/**
 * @swagger
 * /pokemon:
 *   post:
 *     security:
 *        - bearerAuth: []
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
 *     responses:
 *       200:
 *         description: Création du pokemon executé avec succès
 *       404:
 *         description: La création du pokémon a échoué (vérifiez la syntaxe du type de pokémon)
 */

// POST http://localhost:3000/pokemon
router.post(
  "/",auth,
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
 *     security:
 *        - bearerAuth: []
 *     summary: Met à jour un Pokémon existant.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon à mettre à jour.
 *         schema:
 *           type: string
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
 *     responses:
 *       200:
 *         description: Modification du pokemon executé avec succès
 *       404:
 *         description: La modification du pokémon a échoué (vérifiez la syntaxe du type de pokémon)
 */
// PUT http://localhost:3001/pokemon/1 creer une route qui permet de mettre à jour un pokemon
router.put("/:id",auth, udpatePokemon);

/**
 * @swagger
 * /pokemon/{id}:
 *   delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Supprimer un Pokémon.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID du Pokémon à supprimer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supression du pokemon executé avec succès.
 *       404:
 *         description: La supression du pokémon a échoué.
 */
router.delete("/:id",auth, deletePokemon);
// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;