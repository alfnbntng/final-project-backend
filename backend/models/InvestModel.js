import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Invest = db.define(
  "invest",
  {
    amount: {
      type: DataTypes.INTEGER,
    },
    borrowuid: {
      type: DataTypes.INTEGER,
    },
    useruid: {
      type: DataTypes.INTEGER,
    },
    investuid: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Invest;