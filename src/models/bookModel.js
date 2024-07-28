import { DataTypes } from "sequelize";
import connetion from "./index.js";
export default connetion.define("books",{
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