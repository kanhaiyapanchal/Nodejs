import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Review = sequelize.define('Review',{
    review_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'user',
            key:'id'
        }
    },
    book_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'book',
            key:'book_id'
        }
    },
    rating:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1,
            max:5
        }
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    created_date:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
})

export default Review;