import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import request from "supertest";
const MONGO_STRING = process.env.MONGO_STRING;
import { CreateApp } from "../app.js";
import user from "../models/user.js";

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
      email: "test@gmail.com",
      password: "tesqsfjOUT*t9",
      name: "test",
      phoneNumber: "123456789",
    });
    expect(response.statusCode).toBe(201);
  });

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "test@gmail.com",
      password: "tesqsfjOUT*t9",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("Should not login a non-existing user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "testdfsg@gmail.com",
      password: "tesqsfjOUT*t9",
    });
    expect(response.statusCode).toBe(401);
  });

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test" });
    await mongoose.connection.close();
  });
});