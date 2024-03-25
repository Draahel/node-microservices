import express from 'express';
import * as response from '../../../network/response.js';

const router = express.Router();

router.get('/', (req, res) => {
    return response.success(res, 'Hello World!');
});

export default router;