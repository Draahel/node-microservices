const TABLE = 'user';
import * as response from '../../../network/response.js';

export default (store) => {

    if (!store){
        throw new Error('[UserController] store is required');
    }

    const list = () => {
        return store.list(TABLE)
    };
    
    const get = (id) => {
        return store.get(TABLE, id);
    };

    const insert = (data) => {
        return store.insert(TABLE, data);
    };

    const update = (data) => {
        return store.update(TABLE, data);
    };

    const remove = (id) => {
        return store.remove(TABLE, id);
    };

    return {
        list,
        get,
        insert,
        update,
        remove
    }
}