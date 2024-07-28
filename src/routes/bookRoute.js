import express from "express";
import bookModel from "../models/bookModel.js";
import multer from "multer";
const router=express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const imageName =
      Date.now() + 
      '-' + 
      Math.round(Math.random() * 1E9) + 
      "-" +
      file.originalname.trim();
    cb(null, imageName);
    // Attach imageName to the request object so it can be accessed later
    req.imageName = imageName;
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    // Access imageName from the request object
    const imageName = req.imageName;
    const data = await bookModel.create({ ...req.body, image: imageName });
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.json({ success: false, message: "Error during adding books" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

export default router;
