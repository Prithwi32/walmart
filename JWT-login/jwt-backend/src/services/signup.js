import User from "../models/user.js";
import { hash } from "bcrypt";

async function createUser(userData) {
  const { name, email, password } = userData;
  const hashedPassword = await hash(password, 10);
  const createUser = new User({
    name,
    email,
    password: hashedPassword,
    role: "customer",
  });

  const savedUser = await createUser.save();
  return savedUser;
}

export default { createUser };
