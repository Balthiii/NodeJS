import "dotenv/config";
import express from "express";
import carsRoutes from "./routes/cars.js";

const app = express();

console.log("env:", process.env.MONGO_STRING)
const PORT = process.env.PORT || 3001;

// Middlewares
// Middleware qui permet de parser les donnees issues d'un formulaire
app.use(express.json());

app.use("/cars", carsRoutes);

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});