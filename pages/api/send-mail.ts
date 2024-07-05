import type { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: `powusu050@gmail.com`,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message, subject } = req.body;
    const mailOptions = {
      from: "Portfolio<powusu050@gmail.com>",
      to: "shiibaprince@gmail.com",
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
