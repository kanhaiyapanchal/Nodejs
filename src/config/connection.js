import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
    process.env.DATABASE || 'book_store',
    process.env.DB_USERNAME || 'root',
    process.env.PASSWORD || 'deep70',
    {
        host: 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        logging: false,
        port:"3306"
    }
)
export default sequelize;
