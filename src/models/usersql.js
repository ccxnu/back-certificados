import mysql from "mysql2/promise";
import "dotenv/config";

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export class UserModel {
  static async getUserAll() {
    const [certs] = await connection.query(`
    SELECT id, nombre, apellido, saldo FROM certificados
     ORDER BY id ASC
    LIMIT 10
  `);
    return certs;
  }

  static async getUserById({ id }) {
    const [cert] = await connection.query(
      `SELECT id, nombre, apellido, saldo FROM certificados WHERE id = ?`,
      [id],
    );

    if (cert.length === 0) return null;

    return cert[0];
  }

  // TODO

  /*static async createCert({ input }) {}

  static async deleteCert({ id }) {}

  static async updateCert({ id, input }) {}*/
}
