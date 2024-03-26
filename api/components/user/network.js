import express from 'express';
import * as response from '../../../network/response.js';
import controller from './index.js';

const router = express.Router();

router.get('/', (req, res) => {
    controller.list()
        .then(list => response.success(res, list))
        .catch(err => response.error(res, err.message));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    controller.get(id)
        .then(data => response.success(res, data))
        .catch(err => response.error(res, err.message));
});

router.post('/', (req, res) => {
    const body = req.body;
    controller.upsert(body)
        .then(data => response.success(res, data, 201))
        .catch(err => response.error(res, err.message));
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    controller.remove(id)
        .then(data => response.success(res, data))
        .catch(err => response.error(res, err.message));
});

export default router;