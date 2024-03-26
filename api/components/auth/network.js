import express from 'express';
import * as response from '../../../network/response.js';
import controller from './index.js';

const router = express.Router();

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    controller.login(username, password)
        .then( data => response.success(res, data))
        .catch( err => next(err));
});

export default router;