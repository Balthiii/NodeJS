import express from "express";
import shopController from "../controllers/shop.js";
const router = express.Router();

// Route pour afficher la liste des produits
router.get('/listproducts', shopController.getProducts);

// Route pour afficher les détails d'un produit spécifique
router.get("/products/:productId", shopController.getProduct);

// Route pour afficher le formulaire d'ajout de produit
router.get("/addproduct", shopController.getAddProduct);

// Route pour gérer la soumission du formulaire d'ajout de produit
router.post("/addproduct", shopController.postAddProduct);

// Route pour afficher le formulaire d'édition d'un produit
router.get("/addproduct/:productId", shopController.getEditProduct);

// Route pour afficher la gestion des produits
router.get('/managementproducts', shopController.getProducts2);

// Route pour gérer la soumission du formulaire d'édition de produit
router.post('/managementproducts', shopController.postEditProduct);

// Route pour gérer la suppression d'un produit
router.post('/deleteproduct', shopController.postDeleteProduct);


//Route pour afficher la liste de produit via le fichier data.js

//router.get('/', shopController.getIndex);

export default router;
