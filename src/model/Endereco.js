import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Endereco",
  tableName: "enderecos",

  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    rua: { type: "varchar" },
    bairro: { type: "varchar" },
    numero: { type: "int" },
    complemento: { type: "varchar", nullable: true },
    cep: { type: "varchar", length: 8 },
    cidade: { type: "varchar" },
    estado: { type: "varchar", length: 2 },
  },

  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      joinColumn: true,
      inverseSide: "enderecos",
    },
  },
});
