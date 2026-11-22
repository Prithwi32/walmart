import mongoose from '../Configaration/dbConfig.js'; // Ensure this import path is correct
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true }, // Optionally add validation like required
  email: { type: String, required: true, unique: true }, // Optionally add validation
  password: { type: String, required: true }, // Optionally add validation
  role: { type: String, enum: ["admin", "customer"], default: "customer" }
});

export default model("User", userSchema);
