import express from "express";
import {
  createCar,
  deleteCar,
  getCar,
  getCars,
  udpateCar,
} from "../controller/carsController";

const router = express.Router();

// GET http://localhost:3001/cars
router.get("/", getCars);

// GET http://localhost:3001/cars/1
router.get("/:id", getCar);

// POST http://localhost:3001/cars
router.post("/", createCar);

// PUT http://localhost:3001/cars/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", udpateCar);

// DELETE http://localhost:3001/cars/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deleteCar);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;