import multer from "multer";
import { NextResponse } from "next/server";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else cb(null, false);
};
const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 },
  fileFilter,
});

export async function POST(request) {
  try {
    const { file } = await upload.single("file")(request);

    if (!file) {
      return NextResponse.json({ error: fileValidationError });
    }

    return NextResponse.json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
