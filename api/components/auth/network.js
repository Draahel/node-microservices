import express from "express";
import Controller from './index.js';
import * as response from '../../../network/response.js';

const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return response.error(res, 'Invalid data', 400); 
    Controller.login(username, password).then((token)=>{
        if (!token) return response.error(res, 'Invalid data', 400); 
        return response.success(res, token, 200)
    }).catch(err => {
        response.error(res, err.message, 500);
    });
})

export default router;