import QRCode from "qrcode";
import { generatePdf } from "../services/generatePdf.js";
import "dotenv/config";

const URI = process.env.QR_URI;

export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (_, res) => {
    try {
      const users = await this.userModel.getUserAll();
      res.status(200).json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Algo ha ocurrido al buscar los certificados." });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El id es requerido." });
    }

    try {
      const user = await this.userModel.getUserById({ id });
      if (!user) {
        return res.status(404).json({ message: "El usuario no existe." });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: "Algo ha ocurrido al buscar el certificado por id.",
      });
    }
  };

  getQr = async (req, res) => {
    const { id } = req.params;
    const qrData = `${URI}/validation/certificados/` + id;

    try {
      const qrCodeData = await QRCode.toDataURL(qrData);
      res.status(200).send(qrCodeData);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Algo ha ocurrido al generar el qr." });
    }
  };

  getPdf = async (req, res) => {
    const { nombre, apellido, saldo, qrcode } = req.body;

    try {
      const pdfBase64 = await generatePdf({ nombre, apellido, saldo, qrcode });
      res.status(200).send(pdfBase64);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Algo ha ocurrido al generar el pdf." });
    }
  };

  /*static async create(req, res) {
    try {
    } catch (error) {}
  }
  static async delete(req, res) {
    try {
    } catch (error) {}
  }
  static async update(req, res) {
    try {
    } catch (error) {}
  } */
}
