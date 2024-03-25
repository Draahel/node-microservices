import jwt from 'jsonwebtoken';
import config from '../config.js';

const sign = (data) => {
    return jwt.sign(data, config.jswSecret);
};

const verify = (token) => {
    return jwt.verify(token, config.jswSecret);
};

const own = (req, owner) => {

};

const getToken = (auth) => {
    if (!auth) return null;
    
}

const decodeHeader = (req) => {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
};

export default {
    sign,
    verify,
    check: {
        own,
    }
};