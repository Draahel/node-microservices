import express from "express";
import config from '../config.js';
import user from './components/user/network.js';
const app = express();

//Router
app.use('/user', user)    

app.listen(
    config.api.port, 
    () => console.log(`Listen on port ${config.api.port}`)
);