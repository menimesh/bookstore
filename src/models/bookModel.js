import { DataTypes } from "sequelize";
import connection from "./index.js";
export default connection.define("books",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,

    },
    
},
{
    timestamps:false
});