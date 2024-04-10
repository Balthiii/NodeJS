import express from "express";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./routes/index.js";
import pokemonRoutes from "./routes/pokemon.js";
import isAuth from "./Middlewares/auth.js"
import authRoutes from "./routes/auth.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());
  app.use(routes);
  app.use("/pokemon", isAuth, pokemonRoutes);
  app.use("/auth", authRoutes);
  app.use(handleUncaughtErrors);
  return app;
}