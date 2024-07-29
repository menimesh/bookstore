import {Sequelize} from 'sequelize';
import "dotenv/config";
const dbPassword = process.env.DB_PASSWORD || '';
export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    dbPassword,{
        host:process.env.DB_HOST,
        dialect:"mysql",pool:{
            max:5,
        },
    }
);