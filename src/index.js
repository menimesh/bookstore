import express from "express";
import connection from "./models/index.js"
const app = express();
app.listen(8000,async()=>{
console.log("server has started at 8000 port");
try{
   await connection.authenticate();
   console.log("connection sucessful to database");
}catch(err){
console.error("failed to connection to database",err)
}
})