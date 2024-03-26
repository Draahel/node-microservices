import jwt from "jsonwebtoken";
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
       console.log(decoded);
       if (decoded.id !== owner) throw new Error('Unauthorized');
    }
};

const getToken = (authorization) => {
    if (!authorization) throw new Error('Unauthorized');
    if (authorization.indexOf('Bearer ') === -1) throw new Error('Unauthorized');
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