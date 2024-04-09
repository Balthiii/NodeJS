

import Product from "../models/productModel.js";

//Récupération de la liste de tous les produits
const getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render("listproducts", {
                pageTitle: "Tous les produits",
                path: "/listproducts",
                products: rows,
            });
        })
        .catch((err) => {
            // Gestion des erreurs
            if (err) console.log(err);
        });
};


// Récupération de la liste de tous les produits pour la gestion des produits
const getProducts2 = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render("managementproducts", {
                pageTitle: "Tous les produits",
                path: "/managementproducts",
                products: rows,
            });
        })
        .catch((err) => {
            if (err) console.log(err);
        });
};


//Récupération que d'un seul produit.
const getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.fetch(productId)
        .then(([rows]) => {
            const product = rows[0]
            res.render("productdetails", {
                pageTitle: product.title,
                path: "/products",
                product: product
            });
        })

        .catch((err) => {
            if (err) console.log(err);
        });
};

// Ajout d'un nouveau produit
const postAddProduct = (req, res, next) => {
    const product = new Product(
        null,
        req.body.title,
        req.body.imageUrl,
        req.body.description,
        req.body.price
    );
    product
        .save()
        .then(() => {
            res.redirect('/listproducts');
        })
        .catch(err => {
            console.error(err);
        });

};

// Affichage du formulaire d'ajout de produit
const getAddProduct = (req, res, next) => {
    res.render('addproduct', {
        pageTitle: 'Ajouter un Produit',
        path: '/addproduct',
        editing: false
    })
};

// Affichage du formulaire de modification de produit
const getEditProduct = (req, res, next) => {
    const change = req.query.edit
    if (!change) return res.redirect('/listproduct')
    const productId = req.params.productId
    Product
        .fetch(productId)
        .then(([rows]) => {
            const product = rows[0];
            if (!product) res.redirect('/listproduct');
            res.render('addproduct', {
                pageTitle: product.title,
                path: '/managementproducts',
                editing: change,
                product: product
            });
        })
        .catch(err => {
            if (err) console.log(err);
        });
}

// Modification d'un produit existant
const postEditProduct = (req, res, next) => {

    const product = new Product(
        req.body.id,
        req.body.title,
        req.body.imageUrl,
        req.body.description,
        req.body.price
    );
    product
        .update()
        .then(() => {
            res.redirect('/managementproducts');
        })
        .catch(err => {
            if (err) console.log(err);
        });
};


// Suppression d'un produit
const postDeleteProduct = (req, res, next) => {
    Product
        .delete(req.body.productId)
        .then(() => {
            res.redirect('/managementproducts');
        })
        .catch(err => {
            if (err) console.log(err);
        });
};

// Contrôleur des opérations sur les produits
const shopController = {
    getProducts,
    getProduct,
    getProducts2,
    getAddProduct,
    postAddProduct,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
    //getIndex
}
export default shopController;


/* La class Products est utilisé si l'on souhaite faire un CRUD sur un fichier js. Dans notre cas on utilise une BDD.

Products from "../data/data.js";
// const getIndex = (req, res, next) => {
//     res.render("shop", {
//     pageTitle: "Ajouter un Produit",
//     path: "/shop",
//     products: Products,
//   });
// }

*/