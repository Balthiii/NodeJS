import express from "express";
import { signin, signup } from "../controller/authController.js";

import { body, validationResult } from 'express-validator';

const router = express.Router();

const validateSignup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next();

}
/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Connecter un utilisateur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: L'email de l'utilisateur.
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur.
 *     responses:
 *       200:
 *         description: L'utilisateur a été connecté avec succès.
 *       401:
 *         description: Email ou mot de passe incorrect.
 */
router.post("/signin", signin);

router.post("/signin", signin);

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Crée un nouvel utilisateur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - phoneNumber
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom de l'utilisateur, doit contenir au moins 3 caractères.
 *               email:
 *                 type: string
 *                 description: L'email de l'utilisateur, doit être un email valide.
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur, doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et au moins un caractère spécial.
 *               phoneNumber:
 *                 type: string
 *                 description: Le numéro de téléphone de l'utilisateur, doit être un numéro de téléphone valide.
 *     responses:
 *       200:
 *         description: L'utilisateur a été créé avec succès.
 *       400:
 *         description: Erreur lors de la création de l'utilisateur.
 */

router.post('/signup', [

    body('name').isLength({ min: 3 }).withMessage('Le nom doit faire au moins 3 caractères'),
  
    body('email').isEmail().withMessage('Veuillez entrer un email valide'),
  
    body('password').isStrongPassword().withMessage('Le mot de passe doit contenir au moins 8 caractère,une majuscule, une minuscule, un chiffre et au moins un caractère spécial.'),

    body('phoneNumber').isMobilePhone().withMessage('Veuillez entrer un numéro de téléphone correct'),

  ], validateSignup, signup);

export default router;

