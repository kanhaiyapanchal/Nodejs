import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const BookImages = sequelize.define('BookImages', {
    image_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'book',
            key: 'book_id'
        }
    },
    original_file_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    display_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    upload_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'book_images',
});

export default BookImages;