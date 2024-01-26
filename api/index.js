import express from "express";
import config from '../config.js';
import user from './components/user/network.js';
import auth from './components/auth/network.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use('/user', user);
app.use('/auth', auth);

app.listen(
    config.api.port, 
    () => console.log(`Listen on localhost:${config.api.port}`)
);