import express from "express";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./routes/index.js";
import pokemonRoutes from "./routes/pokemon.js";
import isAuth from "./Middlewares/auth.js"
import authRoutes from "./routes/auth.js";
import multer from "multer";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const fileStorage = multer.diskStorage({
    destination: (req, file, cd) => {
      cd(null, "uploads/");
    },
    filename: (req, file, cd) => {
      cd(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

export function CreateApp() {
  const app = express();

  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de mon application',
        version: '1.0.0',
        description: "Cette API permet aux utilisateurs de gérer une collection de Pokémons.Elle offre des fonctionnalités d'authentification, permettant aux utilisateurs de s'inscrire et de se connecter, ainsi que des fonctionnalités pour créer, récupérer, mettre à jour et supprimer des Pokémons.",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    apis: ['./src/routes/*.js'],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use(express.json());

    // file uploads middlware configuration
    app.use(
        multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
      );
      // console.log("path: ", path.join(__dirname, "images"));
      app.use("/uploads", express.static(path.join(__dirname, "uploads")));


  app.use(routes);
  app.use("/pokemon", isAuth, pokemonRoutes);
  app.use("/auth", authRoutes);
  app.use(handleUncaughtErrors);
  return app;
}

