import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Product",
  tableName: "products",

  columns: {
    id: { primary: true, type: "int", generated: true },
    nome: { type: "varchar" },
    code: { type: "int" },
    color: { type: "varchar" },
    size: { type: "varchar" },
    price: { type: "double" },
    description: { type: "varchar" },
  },

  relations: {
    images: {
      type: "one-to-many",
      target: "ProductImg",
      inverseSide: "product",
    },
  },
});
