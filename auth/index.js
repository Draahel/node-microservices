import jwt from "jsonwebtoken";
import error from "../utils/error.js";
import config from "../config.js";

const sign = (data) => {
    return jwt.sign(data, config.jwt.secret);
}

const verify = (token) => {
    return jwt.verify(token, config.jwt.secret);
};

const check = {
    own: (req, owner) => {
       const decoded = decodeHeader(req);
       if (decoded.id !== owner) throw error('Unauthorized', 401);
    }
};

const getToken = (authorization) => {
    if (!authorization) throw error('Unauthorized', 401);
    if (authorization.indexOf('Bearer ') === -1) throw error('Unauthorized', 401);
    const token = authorization.replace('Bearer ', '');
    return token
};

const decodeHeader = (req) => {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
};

export default {
    sign,
    check
}