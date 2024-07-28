import express from "express";
import connection from "./models/index.js"
import bookRoute from "./routes/bookRoute.js"
import 'dotenv/config';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
   res.send("backend is working");
});
app.use("/book",bookRoute);
app.listen(process.env.PORT,async()=>{
console.log("server has started at 8000 port");
try{
   await connection.authenticate();
   console.log("connection sucessful to database");
   connection.sync();
   
}catch(err){
console.error("failed to connection to database",err)
}
});