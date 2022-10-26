import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "transaction",
  {
    userUid: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.TEXT,
    },
    transuid: {
      type: DataTypes.INTEGER,
    },
    balance: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Transaction;