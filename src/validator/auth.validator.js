import {body} from 'express-validator';

const authValidate =[
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 10 })
        .withMessage('Password must be at least 10 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character')
]

export default authValidate
