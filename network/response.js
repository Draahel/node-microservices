export const success = ( res, message, status = 200 ) => {
    res.status(status).send({
        error: false,
        status,
        body: message || ''
    });
};

export const error = ( res, message, status = 500 ) => {
    res.status(status).send({
        error: true,
        status,
        body: message || 'Internal Server Error'
    });
};