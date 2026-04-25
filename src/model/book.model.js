import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'book',
   defaultScope: {
            where: { is_deleted: '0' }
        },
        scopes: {
            deleted: { where: { is_deleted: true } },
            all: { where: {} }
        }
        // hooks: {
        //     beforeCreate: (task) => {
        //         task.is_deleted = '0';
        //     },
        //     beforeUpdate: (task, options) => {
        //         if (!options.fromDelete) {
        //             task.is_deleted = '0';
        //         }
        //     }
        // }
}
)
export default  Book;