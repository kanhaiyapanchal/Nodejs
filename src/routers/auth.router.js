import exprsss from 'express';
import authValidate from '../validator/auth.validator.js';
import {register,login} from '../controllers/auth.controller.js';
import {handleValidationErrors} from '../middlewares/validation.middleware.js';
const router = exprsss.Router();

// For register router
router.post('/register',authValidate,handleValidationErrors,register);

// For login router 
router.post('/login',login);


export default router;