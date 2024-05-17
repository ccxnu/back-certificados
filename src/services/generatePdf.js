import handlebars from "handlebars";
import puppeteer from "puppeteer";
import fs from "fs/promises";
import { createThrowError } from "../middlewares/errorHandler.js";

export const generatePdf = async ({ nombre, apellido, saldo, qrcode }) => {
  try {
    // Create a new browser instance
    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--no-zygote",
        "--single-process",
      ],
    });
    const page = await browser.newPage();
    // Read the contents of the HTML template file
    const data = await fs.readFile("./public/template.html", "utf-8");
    // Compile the template with Handlebars
    const template = handlebars.compile(data);
    // Fill the template with certificate data
    const html = template({ nombre, apellido, saldo, qrcode });

    await page.setContent(html);
    // Generate PDF
    const pdfBuffer = await page.pdf();
    // Close the browser
    await browser.close();
    // Convert PDF buffer to base64
    const pdfBase64 = pdfBuffer.toString("base64");

    return pdfBase64;
  } catch (error) {
    const err = createThrowError("Algo ha ocurrido al generar el pdf.", 500);
    return err;
  }
};
