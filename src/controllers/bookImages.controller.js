
import Book from '../model/book.model.js';
import bookImages from '../model/BookImages.model.js';
import {deleteFile} from '../utils/helper.js';
import { sendResponse } from '../utils/response.js';

export const uploadImages = async (req, res, next) => {
    try {
        const bookID = req.params?.id || 0;
        if(!bookID) return sendResponse(res,404,false,'Book ID Not Found');

        const {rows,count} = await bookImages.findAndCountAll({where:{book_id:bookID}});

        if(count >= 5) return sendResponse(res,404,false,'Already Created for that book');

        const book = await Book.findByPk(bookID);

        if(!book) return sendResponse(res,404,false,'Book Not Found');

        const files = req.files || []
        if(!files) return sendResponse(res,404,false,'Files Not Found');

        var displayOrder = 0;
        var total = count || 0;
        const data = [];
        for await (const element of files) {
            if(total > 5){
                break;
            }
            let fileName = element.originalname
            let img =  await bookImages.create({book_id:bookID,original_file_name:fileName,display_order:displayOrder});
            displayOrder = displayOrder + 1;
            total = total + 1;
            data.push(img);
        }

        return sendResponse(res,201,true,'successfully created', data);
    } catch (error) {
        return next(error);
    }
}
export const deleteImages = async (req, res, next) => {
    try {
        const bookID = req.params?.id || 0;
        const imageId = req.params?.imageId || 0;

        if(!bookID ) return sendResponse(res,404,false,'Book ID Not Found');
        if(!imageId ) return sendResponse(res,404,false,'Image ID Not Found');

        const bookImg = await bookImages.findByPk(imageId);

        if(!bookImg) return sendResponse(res,404,false,'images not found');

        const book = await Book.findByPk(bookID);

        if(!book) return sendResponse(res,404,false,'Book Not Found');

        await deleteFile('./src/images/'+ bookImg.original_file_name );

        await bookImg.destroy();

        return sendResponse(res,200,true,'successfully deleted');
    } catch (error) {
        return next(error);
    }
}
