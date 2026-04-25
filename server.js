import app from "./src/app.js";
import dotenv from "dotenv";
import sequelize from "./src/config/connection.js";
dotenv.config();

const startServer = async () => {
    try {
       await sequelize.authenticate();
       await sequelize.sync();
       const PORT = process.env.PORT || 7000;

    //    start server 
       app.listen(PORT, () => console.log('SERVER : http://localhost:' + PORT));
    } catch (error) {
        console.log('Krishav Debug:',error );
    }
    
}


startServer();