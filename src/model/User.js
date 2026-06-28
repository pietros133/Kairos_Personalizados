import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",

  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
      unique: true,
    },
    password: {
      type: "varchar",
    },
    cpf: {
      type: "varchar",
      length: 11,
      unique: true,
    },
    phone: {
      type: "varchar",
      length: 20,
    },
    role: {
      type: "enum",
      enum: ["admin", "user"],
      default: "user",
    },
  },

  relations: {
    enderecos: {
      type: "one-to-many",
      target: "Endereco",
      inverseSide: "user",
    },
  },
});
