import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "user",
  {
    name: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    contact: {
      type: DataTypes.INTEGER,
    },
    uid: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    profile_pic: {
      type: DataTypes.TEXT,
    },
    aadhar: {
      type: DataTypes.TEXT,
    },
    bankname: {
      type: DataTypes.TEXT,
    },
    bankifsc: {
      type: DataTypes.TEXT,
    },
    bank: {
      type: DataTypes.TEXT,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Users;