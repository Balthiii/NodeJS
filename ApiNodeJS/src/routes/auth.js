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


router.post("/signin", signin);

router.post('/signup', [

    body('name').isLength({ min: 3 }).withMessage('Le nom doit faire au moins 3 caractères'),
  
    body('email').isEmail().withMessage('Veuillez entrer un email valide'),
  
    body('password').isStrongPassword().withMessage('Le mot de passe doit contenir au moins 8 caractère,une majuscule, une minuscule, un chiffre et au moins un caractère spécial.'),

    body('phoneNumber').isMobilePhone().withMessage('Veuillez entrer un numéro de téléphone correct'),

  ], validateSignup, signup);

export default router;

