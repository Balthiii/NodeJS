import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  Name: String,
  Type: String,
  Weight: Number,
  Talent: String,
  Size: String,
  Description : String

});

export default model("Pokemon", pokemonSchema);