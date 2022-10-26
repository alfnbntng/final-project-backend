// const mysql = require("mysql");
import mysql from "mysql";

//konfigurasi koneksi
const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crowdinvest",
  multipleStatements: true,
});

//koneksi database
koneksi.connect((err) => {
  if (err) throw err;
  console.log("mySql Connected...");
});

export default koneksi;