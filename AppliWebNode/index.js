import Express from "express";
import shopRouter from "./routes/shopRouter.js";
import bodyParser from 'body-parser';

//Créer une application Express
const app = Express();

//Configuration de mon application pour qu'elle puisse servir du contenu statique
app.use(Express.static("public"));
//http://localhost:3000/images/toto.png

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");
app.set("views", "views");


app.get("/", (req, res) => {
  res.render("listproducts", {});
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Utilisation du routeur ShopRouter pour gérer les routes.
app.use(shopRouter);

//Ecoute du serveur sur le port 4000
app.listen(4000, () => {
  console.log("Le serveur s'éxécute sur le port 4000. Pour accéder à la page d'accueil : http://localhost:4000/listproducts :)");
});

