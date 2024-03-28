import express from 'express';
import * as response from '../network/response.js';
import store from '../store/mysql.js';

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/', upsert);
router.delete('/:table/:id', remove);

// Functions
async function list(req, res, next) {
    const list = await store.list(req.params.table);
    response.success(res, list);
};

async function get(req, res, next){
    const data = await store.get( req.params.table, req.params.id )
    response.success(res, data)
}

async function insert(req, res, next){
    const data = await store.upsert( req.params.table, req.body )
    response.success(res, data, 201);
}

async function upsert(req, res, next){
    const data = await store.upsert( req.params.table, req.body );
    response.success(res, data, 200);
}

async function remove(req, res, next){
    const data = await store.remove( req.params.table, req.params.id );
    response.success(res, data)
}

export default router;