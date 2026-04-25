// this controller handle the user register and user login
import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
import { sendResponse } from '../utils/response.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res, next) => {
    try {
        const { name, email, password, admin_key } = req.body;

        const role = (admin_key && admin_key == process.env.ADMIN_SECRET_KEY ? 'admin' : 'customer')

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return sendResponse(res, 400, false, 'User already exists')
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // set if admin key pass then make is admin other wise make it customer 
        const user = await User.create({ name, email, password: hashedPassword, role: role });

        return sendResponse(res, 201, true, 'User created successfully', {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        return next(error)
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return sendResponse(res, 400, false, 'Invalid email or password')
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return sendResponse(res, 400, false, 'Invalid email or password')
        }

        // Generate JWT token
        const expiryTime = process.env.JWT_TOKEN_EXPIRESIN || '1h';
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_TOKEN,
            { expiresIn: expiryTime }
        );

        return sendResponse(res, 200, true, 'Login successful', {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        });
    } catch (error) {
        return next(error)
    }
};
