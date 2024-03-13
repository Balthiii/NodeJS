import Express from "express";
import shopRouter from "./routes/shop.js";
import bagRouter from "./routes/bag.js";
import addProductRouter from "./routes/addproduct.js";
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
  res.render("home", {});
});

app.use("/shop", shopRouter);

app.use("/addproduct", addProductRouter);

app.use("/shop/bag", bagRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

