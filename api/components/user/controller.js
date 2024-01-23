const TABLE = 'user';
import * as response from '../../../network/response.js';

export default (store) => {

    if (!store){
        throw new Error('[UserController] store is required');
    }

    const list = (req, res) => {
        return store.list(TABLE).then(
            (list) => response.success(res, list)
        ).catch(
            (err) => response.error(res, err.message)
        );
    };
    
    const get = (req, res) => {
        const id = req.params.id;
        return store.get(TABLE, id).then(
            (user) => response.success(res, user)
        ).catch(
            (err) => response.error(res, err.message)
        );
    };

    const upsert = (req, res) => {
        const data = req.body;
        return store.upsert(TABLE, data).then(
            (user) => response.success(res, user)
        ).catch(
            (err) => response.error(res, err)
        );
    };

    const remove = (req, res) => {
        const id = req.params.id;
        return store.remove(TABLE, id).then(
            (user) => response.success(res, user)
        ).catch(
            (err) => response.error(res, err)
        );
    };

    return {
        list,
        get,
        upsert,
        remove
    }
}