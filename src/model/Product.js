import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Product",
  tableName: "products",

  columns: {
    id: { primary: true, type: "int", generated: true },
    nome: { type: "varchar" },
    code: { type: "varchar", unique: true },
    color: { type: "varchar" },
    size: { type: "simple-array", nullable: true },
    price: { type: "decimal", precision: 10, scale: 2 },
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
