import express from "express";
import bodyParser from 'body-parser';
import signupRouter from "./routes/signup.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/user", signupRouter);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
