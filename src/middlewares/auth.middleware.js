import jwt from 'jsonwebtoken'
import { sendResponse } from '../utils/response.js'

export const varifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return sendResponse(res, 401, false, 'Access denied. No token provided.');
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if(decoded && decoded.role && decoded.role == 'admin'){
            req.user = decoded;
            return next();
        }
        const error = new Error("Invalid token provided.");
        error.status = 401;
        return  next(error)
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
             const error = new Error("Token expired. Please login again.");
            error.status = 401;
            return  next(error)
        }
        
        return sendResponse(res, 401, false, 'Invalid token.');
    }
}

export const adminVarifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    if (authHeader || authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            req.user = decoded;
            next();
        } catch (error) {
            // console.log('Krishav Debug:', error);
            next();
        }
    }
}
