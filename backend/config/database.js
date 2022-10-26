import { Sequelize } from "sequelize";

const db = new Sequelize('fintech','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;