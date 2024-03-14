//import Product from ("../models/productModel");

const getAddProduct = (req, res, next) => {
    res.render('/addprocuct' , {
        pageTitle : 'Ajouter un Produit',
        path: '/addproduct',
        editing: false
    });
};

export default getAddProduct;