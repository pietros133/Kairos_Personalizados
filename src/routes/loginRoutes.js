import express from "express";
import { loginController } from "../controllers/loginController.js";

const Router = express();

Router.post("/login", loginController);

export default Router;
