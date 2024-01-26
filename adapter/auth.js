import jwt from 'jsonwebtoken';
import config from '../config.js';

const sign = (data) => {
    return jwt.sign(data, config.jswSecret);
};

const verify = (token) => {
    return jwt.verify(token, config.jswSecret);
};

export default {
    sign,
    verify
};