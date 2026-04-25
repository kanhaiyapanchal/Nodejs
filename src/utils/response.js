// common send Response 
export const sendResponse = (res, statusCode, success, msg = null, data = null, meta = null) => {
    const response = {
        success: success,
        msg: msg
    }
    if (data) response.data = data
    if (meta) response.meta = meta
    return res.status(statusCode).json(response);
} 