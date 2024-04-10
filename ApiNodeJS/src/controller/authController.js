import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log(req.body);
  // On va hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 12);
  // On cree un nouvel utilisateur
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    phoneNumber,
  });

try {
  // On sauvegarde le nouvel utilisateur
  const doc = await newUser.save();

  // si tout s'est bien passé, on renvoie un status 201
  res.status(201).json(doc);
} catch (error) {
  // En cas d'erreur lors de la sauvegarde, on renvoie une erreur
  res.status(500).json({ message: error.message });
}
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {

  // On cherche l'utilisateur dans la base de donnees
  const user = await User.findOne({ email: email });
  if (!user) {
  // si l'utilisateur n'existe pas, on renvoie une erreur
  return res.status(401).json({ message: "Utilisateur non trouvé." });
  }

  // si l'utilisateur existe, on compare les mots de passe
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
  // si le mot de passe est invalide, on renvoie une erreur
    return res.status(401).json({ message: "Mot de passe invalide." });
  }
  // sinon on genere un token
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  // on renvoie le token
  res.status(200).json({ token });
  
} catch (error) {
  // En cas d'erreur, on renvoie une erreur serveur
  res.status(500).json({ message: error.message });
}
};