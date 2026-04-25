export const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || err.statusCode || 500;
    var message = err.message || "Internal Server Error";
    const errCode =err.code || 'INTERNAL_SERVER_ERROR';
    if(errCode == 'ENOENT' )  message ="File Not Found";

    return res.status(statusCode).json({
        success: false,
        error: {
            code: errCode,
            message,

        },
      
    });
};
