import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import User from "../model/User.js";
import Endereco from "../model/Endereco.js";
import Product from "../model/Product.js";
import ProductImg from "../model/ProductImg.js";
dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Endereco, Product, ProductImg],
});

export default AppDataSource;
