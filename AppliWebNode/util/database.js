// Importe le module mysql2 pour gérer la connexion à la base de données
import mysql from "mysql2"

const pool = mysql.createPool({
  host: "localhost",
  database: "node",
  user: "root",
  password: "",
});

export default pool.promise();
