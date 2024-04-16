import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import request from "supertest";
const MONGO_STRING = process.env.MONGO_STRING;
import { CreateApp } from "../app.js";
import user from "../models/user.js";

let token;
let createdPokemonId;
describe("creation d'un utilisateur et login", () => {
  let app;
  beforeAll(() => {
    mongoose
      .connect(MONGO_STRING)
      .then(() => console.log("Connected to the database for Testing!"))
      .catch((err) => console.log(err));
    app = CreateApp();
  });

  it("Should create a new user", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test1@gmail.com",
      password: "dfsffd9*FDE",
      name: "test",
      phoneNumber: "051993425",
    });
    expect(response.statusCode).toBe(201);
  });

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "test1@gmail.com",
      password: "dfsffd9*FDE",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
    console.log(token);
  });

  it('Créer un Pokémon', async () => {
    const res = await request(app)
      .post('/pokemon')
      .set('Authorization', `${token}`) // utilisez le token pour l'authentification
      .send({
        Name: 'Pikachu',
        Type: 'Électrique',
        Weight: 9,
        Talent: 'Statik',
        Size: '0.4m',
        Description : 'Pikachu est un Pokémon de type Électrique, il est le Pokémon mascotte de la franchise Pokémon. Il évolue en Raichu.'
      });

    createdPokemonId = res.body.id; // sauvegardez l'id du Pokémon créé pour une utilisation ultérieure
    expect(res.statusCode).toBe(201);
  });

  it('Récupérer un Pokémon', async () => {
    const res = await request(app)
      .get(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Pikachu');
  });

  it('Mettre à jour un Pokémon', async () => {
    const res = await request(app)
      .put(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `${token}`)
      .send({
        Name: 'Raichu'
      });

    expect(res.statusCode).toBe(200);
  });

  it('Supprimer un Pokémon', async () => {
    const res = await request(app)
      .delete(`/pokemon/${createdPokemonId}`)
      .set('Authorization', `${token}`);

    expect(res.statusCode).toBe(200);
  });
 

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test1@gmail.com" });
    await mongoose.connection.close();
  });
});

