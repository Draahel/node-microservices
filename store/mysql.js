import mysql from 'mysql';
import config from '../config.js';

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
};

let connection;

const handleConnection = () => {

    connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) {
            console.error('[db error]',err);
            setTimeout(handleConnection, 2000);
        }else{
            console.log('Connected to database');
        }
    });

    connection.on('error', (err) => {
        console.error('[db error]',err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST  ') {
            handleConnection();
        }else{
            throw err;
        }
    });

};

handleConnection();

const list = (table) => {
    const query = `SELECT * FROM ${table}`
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

const get = (table, id) => {
    const query = `SELECT * FROM ${table} WHERE id=${id}`
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    get,
    list
};