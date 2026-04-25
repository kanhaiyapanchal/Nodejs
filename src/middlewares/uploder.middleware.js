import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

function fileFilter(req, file, cb) {
   
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'&& file.mimetype !== 'image/webp') {
        cb(new Error('Invalid File Types'))
    } else {
        cb(null, true)
    }

}

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 * 1024 * 2 } })

export const uploader = (req, res, next) => {
    const uploaderMaster = upload.array('book_files', 5);
    uploaderMaster(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return next(err)
            // let e = err.code == 'LIMIT_UNEXPECTED_FILE' ? "Wrong FIle Type": err.message;
            // return res.status(400).json({ error: "Uploading Errors : " + e ,err})
        } else if (err) {
            return next(err);
            // return res.status(400).json({ error: "Unknown Errors : " + err.message })
        }
        next();
    })
}