import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
const upload = multer({ dest: "./public/upload" });

export default async function handle(req, res) {
  console.log(NextApiRequest.method);
  if (NextApiRequest.method === "POST") {
    try {
      const { file } = await upload.single("file")(req);
      if (!file) {
        res.status(400).json({ error: fileValidationError });
        return;
      }
      console.log("Uploaded file:", file);
      res.status(200).json({
        message: "File uploaded successfully",
      });
    } catch (error) {
      res.status(405).json({ message: "Method not allowed j" });
    }
  }
}
