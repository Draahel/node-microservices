import * as response from './response.js';

const errors = (err, req, res, next) => {
    const message = err.message || 'Internal Server Error';
    const status = err.status || 500;

    response.error(res, message, status);
}

export default errors;