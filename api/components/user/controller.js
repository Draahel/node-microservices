const TABLE = 'user';
import authController from '../auth/index.js';

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

    const insert = async (data) => {
        const authData = {
            id: data.id,
            username: data.username,
            password: data.password
        };
        await authController.insert(authData);
        const user = {
            id: data.id,
            name: data.name,
        };
        return store.insert(TABLE, user);
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