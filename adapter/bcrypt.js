import bcrypt from 'bcrypt';
import config from '../config.js';

const saltRounds = config.bcrypt.saltRounds;

const hash = async (pass) => {
    return bcrypt.hash(pass, saltRounds);
}

const compare = (password, passwordHash) => {
    return bcrypt.compare(password, passwordHash);
}

export default {
    hash,
    compare,
}