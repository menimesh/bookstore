import bookModel from "../models/bookModel.js";
import {Op} from "sequelize";

export default class BookController{
    async addBook(req, res,imageName)  {
        try {
          const data = await bookModel.create({ ...req.body, image: imageName });
          console.log(data);
          if (data) {
            res.json(data);
          } else {
            res.json({ success: false, message: "Error during adding books" });
          }
        } catch (error) {
          res.status(500).json({error });
          console.log(error);

        }
      }
     async getBookById(req,res){
        
        try{
            const {id}=req.params;
            if(id){
                const data= await bookModel.findByPk(id);
                res.json(data);
            }
            else{
                res.json({success:false,message:"id not provided"});
            }
        }catch(error){
          res.status(500).json({success:false,message:"server error",error});
        }
     }
     async updateBook(req,res){
        
        try{
       const {id}=req.params;
       if(id){
        const data=await bookModel.update(req.body,{
            where:{
                id:id,
            },
        });
        console.log(data);
        if(res.data[0]){
            res.json({success:true,message:"sucessfully updated"});
        }
        else{
            res.json({success:false,message:"failed to updated"});
        }
       }
       else{
        res.json({success:false,message:"book id not provided"});
       }
        }
        catch(error){
            console.log(error);
        }
       
     }

     async deleteBook(req,res){
        
        try{
       const {id}=req.params;
       if(id){
        const data=await bookModel.destroy({
            where:{
                id:id,
            },
        });
        console.log(data);
        if(data){
            res.json({success:true,message:"sucessfully deleted"});
        }
        else{
            res.json({success:false,message:"failed to delete"});
        }
       }
       else{
        res.json({success:false,message:"book id not provided"});
       }
        }
        catch(error){
            console.log(error);
        }
       
     }
    async searchBook(req,res){
        const {q}=req.query;
        if(q){
            const data=await bookModel.findAll({
                where:{
                    [Op.or]:{
                        name:{
                            [Op.like]:`%${q}`,
                        },
                        author:{
                            [Op.like]:`%${q}`,
                        },
                    },
                },
            });
            if(data){
                console.log(data);
                res.json(data);
            }
            else{
             res.json({success:false,message:"not in database"})
            }
            
        }
    else{
     res.json({success:false,message:"query not provided"})
    }
     }

     async getBooks(req,res){
        let {limit}=req.query;
        if(!limit){
            limit=20;
          const data=await bookModel.findAll({
                limit,
            })
            res.json(data);
        }
     }
    }
 


