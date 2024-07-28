export default class bookController{
    async addBook(req, res,imageName)  {
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
      }
}