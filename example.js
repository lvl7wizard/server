const { Pool } = require("pg");
const pool = new Pool();

// run using PGDATABASE=my_bookshop node example.js
console.log(process.env.PGDATABASE, "<--- running on this data base");

pool.query("SELECT * FROM BOOKS;").then((data) => {
    console.log(data.rows)
})