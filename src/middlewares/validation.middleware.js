// we have handle validation error by useing expres validatorr using a fucntion send with common error handler withformat data

import { validationResult } from 'express-validator'
import { sendResponse } from '../utils/response.js';
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res,400, false, 'Validation failed', errors.array())
    }
    next();
}
