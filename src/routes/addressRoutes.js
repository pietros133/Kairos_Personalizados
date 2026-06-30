import express from "express";
import { addressRegisterController } from "../controllers/AddressRegisterController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express();

router.post("/address", authMiddleware, addressRegisterController);

export default router;
