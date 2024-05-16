import mysql from "mysql2/promise";
import data from "./data.json" assert { type: "json" };
import "dotenv/config";

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

let sqlQuery = "INSERT INTO certificados (nombre, apellido, saldo) VALUES ?";

const values = data.map((user) => [user.nombre, user.apellido, user.saldo]);

sqlQuery = connection.format(sqlQuery, [values]);

console.log(values);

// Insert seed data into the database
connection.query(sqlQuery, [values], (err, results) => {
  if (err) {
    console.error("Error seeding data:", err);
  } else {
    console.log("Data seeded successfully:", results);
  }
});

// Close the connection when done
connection.end();
