import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import request from "supertest";
const MONGO_STRING = process.env.MONGO_STRING;
import { CreateApp } from "../app.js";
import user from "../models/user.js";
import path from "path";

let token;
let createdPokemonId;
describe("Creation d'un utilisateur et login", () => {
  let app;
  beforeAll(() => {
    mongoose
      .connect(MONGO_STRING)
      .then(() => console.log("Connected to the database for Testing!"))
      .catch((err) => console.log(err));
    app = CreateApp();
  });

  it("Créer un nouvel utilisateur", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test1@gmail.com",
      password: "dfsffd9*FDE",
      name: "test",
      phoneNumber: "051993425",
    });
    expect(response.statusCode).toBe(201);
  });

  it("Connecter un nouvel utilisateur", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "test1@gmail.com",
      password: "dfsffd9*FDE",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
  });

  describe('Tests pour les Pokémon', () => {
  it('Créer un Pokémon', async () => {
    const res = await request(app)
      .post('/pokemon')
      .set('Authorization', `Bearer ${token}`) // utilisez le token pour l'authentification
      .send({
        Name: 'Pikachu',
        Type: 'Électrique',
        Weight: 9,
        Talent: 'Statik',
        Size: '0.4m',
        Description : 'Quand il s’énerve, il libère instantanément l’énergie emmagasinée dans les poches de ses joues.'
      });

    createdPokemonId = res.body.data._id; // sauvegardez l'id du Pokémon
    expect(res.statusCode).toBe(201);
  });

  it('Récupérer un Pokémon', async () => {
    const res = await request(app)
      .get(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  it('Mettre à jour un Pokémon', async () => {
    const res = await request(app)
      .put(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        Name: 'Raichu',
        Type: 'Électrique',
        Weight: 30,
        Talent: 'Statik',
        Size: '0.8m',
        Description : 'Il se protège des décharges grâce à sa queue, qui dissipe l’électricité dans le sol.'
      });

    expect(res.statusCode).toBe(200);
  });

  it('Supprimer un Pokémon', async () => {
    const res = await request(app)
      .delete(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });


  describe('Tests pour l\'upload de fichiers', () => {
    it('Uploader un fichier', async () => {
      const res = await request(app)
        .post('/uploads/image')
        .set('Authorization', `Bearer ${token}`)
        .attach('file', path.join(__dirname, '../uploads/giratina.png'));
        console.log(res);
      expect(res.statusCode).toBe(200);
    });
  });

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test1@gmail.com" });
    await mongoose.connection.close();
  });
});
});
