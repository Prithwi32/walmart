import { Router } from "express";

import createUser from "../controller/signupController.js";

const router = Router();

router.post("/register", createUser);

export default router;
