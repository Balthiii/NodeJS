import "dotenv/config";
import express from "express";
import pokemonRoutes from "./routes/pokemon.js";
import mongoose from "mongoose"
import { handleUncaughtErrors } from "./Middlewares/error.js";

const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

// Middlewares
// Middleware qui permet de parser les donnees issues d'un formulaire
app.use(express.json());

app.use("/pokemon", pokemonRoutes);

app.use("/error", (req, res) => {
  try {
    //
    throw new Error("This is an error");
  } catch (error) {}
});

// Middleware pour gerer les erreurs
app.use(handleUncaughtErrors);

/* 
 Routes definit une route Get sur / qui renvoie un message
 La fonction app.get prend deux arguments
 le chemin de la route
 et une fonction qui prend deux arguments :
 request et response 
 */
app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
  // JSON : Javascript Object Notation
});

//Middleware 


mongoose.connect(MONGO_STRING).then(() => {
  console.log('Connected to the database !');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

