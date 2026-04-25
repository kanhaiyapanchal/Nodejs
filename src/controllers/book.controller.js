import Book from '../model/book.model.js';
import { sendResponse } from '../utils/response.js';
import { matchedData } from 'express-validator';

//images/likeorate

export const getBook = async (req, res, next) => {
    try {
        let role = '';
        if(typeof req.user !=='undefined' && req.user && req.user.role){
            role = req.user.role;
        }
        const bookID = parseInt(req.params?.id) || '';
        const page = parseInt(req.query.page )|| 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset =  (page * limit) -  limit

        // filter 
        const genre = req.query.genre || '';
        const author = req.query.author || '';
        const minPrice = parseInt(req.query.minprice) || 0;
        const maxPrice = parseInt(req.query.maxprice) || 0;
        let whereFilter = {};
        
        //  all filter for query
        if(author){
            whereFilter["author"] = {[Op.like]: `%${author}%`};
        }
        if(genre)whereFilter["genre"] = genre;
        if(minPrice && maxPrice){
            whereFilter["price"] = {[Op.between]: [minPrice, maxPrice]};
        }else if(minPrice){
            whereFilter["price"] = {[Op.gte]: minPrice};
        }else if(maxPrice){
            whereFilter["price"] = {[Op.lte]: maxPrice};
        }

        let fields = ["book_id","title","author","genre","price"]
        if(role && role =='admin'){
             fields = ["book_id","title","author","genre","price","stock_quantity","created_date"];
        }

        if(bookID && bookID != ''){
            whereFilter["book_id"] = bookID;
        }
        // join with book images
        // const bookImages = await BookImages.findAll({attributes:['image_id','original_file_name','display_order','upload_date']});
        // Book.hasMany(bookImages, { foreignKey: 'book_id' });
        // bookImages.belongsTo(Book, { foreignKey: 'book_id' });

        const {rows,count} = await Book.findAndCountAll({
            where:whereFilter,
            attributes: fields,
            offset,limit})
        return sendResponse(res,200,true,'successfully fetch',rows, {page,limit,count})
    } catch (error) {
        return next(error);
    }
}

export const addBook = async (req, res, next) => {
    try {
        const bookData = matchedData(req, { locations: ['body'] });
        let books = await Book.create(bookData);
        books = JSON.parse(JSON.stringify(books));

        delete books.is_deleted;
        return sendResponse(res,201,true,'successfully addded',books);
    } catch (error) {
        return next(error);
    }
}

export const updateBook = async (req, res, next) => {
    try {
        const bookID = req.params?.id || 0;
        if(!bookID) return sendResponse(res,404,false,'Book ID Not Found');

        const book = await Book.findByPk(bookID);

        if(!book) return sendResponse(res,404,false,'Book Not Found');

        const bookData = matchedData(req, { locations: ['body'] });

        const updateData = await book.update(bookData);
        delete updateData.is_deleted;

        return sendResponse(res,200,true,'successfully Upadeted',updateData);
    } catch (error) {
        return next(error);
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        const bookID = req.params?.id || 0;
        if(!bookID) return sendResponse(res,404,false,'Book ID Not Found');

        const book = await Book.findByPk(bookID);

        if(!book) return sendResponse(res,404,false,'Book Not Found');


       await book.update({is_deleted:1});

        return sendResponse(res,200,true,'successfully Deleted');
    } catch (error) {
        return next(error);
    }
}