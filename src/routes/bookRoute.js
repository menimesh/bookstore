import express from "express";
import multer from "multer";
import BookController from "../controllers/bookController.js";


const router=express.Router();
let imageName;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        imageName =
        Date.now() + 
        '-' + 
        Math.round(Math.random() * 1E9) + 
        "-" +
        file.originalname.trim();
        cb(null, imageName);
        
    },
});
const upload = multer({ storage });
const bookController=new BookController();
router.post("/add", upload.single("image"),(req,res)=>{
    bookController.addBook(req,res,imageName);
});
router.get("/:id",bookController.getBookById);
router.post("/update/:id",bookController.updateBook);
router.post("/delete/:id",bookController.deleteBook);
export default router;
