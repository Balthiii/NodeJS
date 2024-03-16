

import Product from "../models/productModel.js";
// import Products from "../data/data.js";

//Récupération de la liste de tous les produits
const getProducts = (req, res, next) => {
    Product.fetchAll()
      .then(([rows, fieldData]) => {
        res.render("shop", {
          pageTitle: "Tous les produits",
          path: "/shop",
          products: rows,
        });
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

//Récupération que d'un seul produit.
const getProduct = (req,res,next) => {
    const productId = req.params.productId;
    Product.fetch(productId)
    .then(([rows]) => {
        const product = rows[0]
        res.render("product-details", {
        pageTitle: product.title,
        path : "/products",
        product : product
    });
})
    .catch((err) => {
        if (err) console.log(err);
      });
};

// const getIndex = (req, res, next) => {
//     res.render("shop", {
//     pageTitle: "Ajouter un Produit",
//     path: "/shop",
//     products: Products,
//   });
// }


// const postAddProduct = (req, res, next) => {
//     const product = new Product(
//         null,
//         req.body.title,
//         req.body.imageUrl,
//         req.body.description,
//         req.body.price
//     );

// product.save()
//         .then(() => {
//             res.redirect('/');
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send("Une erreur s'est produite lors de l'ajout du produit.");
//         });

// };


const shopController = {
    getProducts,
    getProduct   
    //getIndex
}
export default shopController ;






