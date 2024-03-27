import express from 'express';
import secure from './secure.js'
import * as response from '../../../network/response.js';
import controller from './index.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    controller.list()
        .then(list => response.success(res, list))
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    controller.get(id)
        .then(data => response.success(res, data))
        .catch(err => next(err));
});

router.post('/', (req, res, next) => {
    const body = req.body;
    controller.upsert(body)
        .then(data => response.success(res, data, 201))
        .catch(err => next(err));
});

router.post('/follow/:id', 
    secure('follow'), 
    (req, res, next) => {
        controller.follow(req.user.id, req.params.id)
            .then(data => response.success(res, data, 201))
            .catch(err => next(err));
    }
);

router.put('/',
    secure('update'),
    (req, res, next) => {
        const body = req.body;
        controller.upsert(body)
            .then(data => response.success(res, data, 201))
            .catch(err => next(err));
    }
);

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    controller.remove(id)
        .then(data => response.success(res, data))
        .catch(err => next(err));
});

export default router;