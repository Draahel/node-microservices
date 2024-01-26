export const success = (res, message = '', status = 200) => {
    res.status(status).json({
        error: null,
        status,
        body: message
    })
}

export const error = (res, message = 'Internal Server Error', status = 500) => {
    res.status(status).json({
        error: true,
        status,
        body: message
    })
}