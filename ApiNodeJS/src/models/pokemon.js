import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  Name: String,
  Type: String,
  Weight: Number,
  //   year: {
  //     type: Number,
  //     min: 1900,
  //     max: 2022,
  //   },
  //   created_at: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

export default model("Pokemon", pokemonSchema);