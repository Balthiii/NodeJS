import Express from "express";
import shopRouter from "./routes/shopRouter.js";
import addProductRouter from "./routes/addproductRouter.js";
import productsRouter from "./routes/productsRouter.js"
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
  res.render("shop", {});
});


app.use(shopRouter)

app.use("/addproduct", addProductRouter);

app.use("/products", productsRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

