import {body} from 'express-validator';

const bookValidate =[
    body('title')
        .not()
        .isEmpty()
        .withMessage('title is required'),
    body('author')
        .not()
        .isEmpty()
        .withMessage('author is required'),
    body('genre')
        .not()
        .isEmpty()
        .withMessage('author is required')
        .isNumeric()
        .withMessage('genre is only numberic'),
     body('price')
        .not()
        .isEmpty()
        .withMessage('price is required')
        .isNumeric()
        .withMessage('price is only numberic')
        .custom(async value => {
            if (value < 0) {
                throw new Error('Only non-negative numbers');
            }
        })
        .withMessage('Only non-negative numbers'),
     body('stock_quantity')
        .not()
        .isEmpty()
        .withMessage('Stock is required')
        .isNumeric()
        .withMessage('Stock is only numberic')
        .custom(async value => {
            if (value < 0) {
                throw new Error('Only non-negative numbers');
            }
        })
        .withMessage('Only non-negative numbers')
]

const bookUpdateValidate =[
    body('title')
        .optional()
        .not()
        .isEmpty()
        .withMessage('title is required'),
    body('author')
         .optional()
          .not()
        .isEmpty()
        .withMessage('author is required'),
    body('genre')
         .optional()
          .not()
        .isEmpty()
        .withMessage('author is required')
        .isNumeric()
        .withMessage('genre is only numberic'),
     body('price')
        .optional()
         .not()
        .isEmpty()
        .withMessage('price is required')
        .isNumeric()
        .withMessage('price is only numberic')
        .custom(async value => {
            if (value < 0) {
                throw new Error('Only non-negative numbers');
            }
        })
        .withMessage('Only non-negative numbers'),
     body('stock_quantity')
        .optional()
         .not()
        .isEmpty()
        .withMessage('Stock is required')
        .isNumeric()
        .withMessage('Stock is only numberic')
        .custom(async value => {
            if (value < 0) {
                throw new Error('Only non-negative numbers');
            }
        })
        .withMessage('Only non-negative numbers')
]


export {bookValidate,bookUpdateValidate}
