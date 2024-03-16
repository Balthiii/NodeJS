

import Product from "../models/productModel.js";

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
const postAddProduct = (req, res, next) => {
    console.log(req.body)
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
            res.redirect('/shop');
        })
        .catch(err => {
            console.error(err);
        });

};


const getAddProduct = (req, res, next) => {
    res.render('addproduct', {
        pageTitle : 'Ajouter un Produit',
        path : '/addproduct',
        editing : false
    })
};

const shopController = {
    getProducts,
    getProduct,
    getAddProduct,
    postAddProduct
    //getIndex
}
export default shopController ;


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