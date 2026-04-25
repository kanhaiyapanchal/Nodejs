import exprsss from 'express';
import {getBook, addBook, updateBook, deleteBook} from '../controllers/book.controller.js';
import {uploadImages,deleteImages} from '../controllers/bookImages.controller.js';
import { varifyToken,adminVarifyToken } from '../middlewares/auth.middleware.js';
import {bookValidate,bookUpdateValidate} from '../validator/book.validator.js';
import {handleValidationErrors} from '../middlewares/validation.middleware.js';
import {uploader} from '../middlewares/uploder.middleware.js';


const router = exprsss.Router();


// For get books
router.get('/',adminVarifyToken,getBook);
router.get('/:id',adminVarifyToken,getBook);

router.post('/',varifyToken,bookValidate,handleValidationErrors,addBook);

router.patch('/:id',varifyToken,bookUpdateValidate,handleValidationErrors, updateBook);

router.patch('/:id',varifyToken,bookUpdateValidate,handleValidationErrors, updateBook);

router.delete('/:id',varifyToken,bookUpdateValidate,handleValidationErrors, deleteBook);

router.post('/:id/images',varifyToken,uploader, uploadImages);

router.delete('/:id/images/:imageId',varifyToken,uploader, deleteImages);


export default router;