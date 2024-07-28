import express from "express";
import bookModel from "../models/bookModel.js";
import multer from "multer";
import BookController from "../controllers/bookController.js";
const bookController=new BookController();
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

router.post("/add", upload.single("image"),(req,res)=>{
    bookController.addBook(req,res,imageName);
} );

export default router;
