import Products from "../models/productModel.js";
// import Products from "../data/data.js";


const postAddProduct = (req, res, next) => {
    const product
     = new Products(
        null,
        req.body.title,
        req.body.imageUrl,
        req.body.description,
        req.body.price
    );

product.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Une erreur s'est produite lors de l'ajout du produit.");
        });

};

const getAddProduct = (req, res, next) => {
    res.render('addproduct', {
        pageTitle : 'Ajouter un Produit',
        path : '/addproduct',
        products : [Products],
    });
};

const shopController = {
    getAddProduct,
     postAddProduct,
    // getIndex
}
export default shopController ;


// const getIndex = (req, res, next) => {
//     res.render("addproduct", {
//     pageTitle: "Ajouter un Produit",
//     path: "/addproduct",
//     products: Products,
//   });
// }



