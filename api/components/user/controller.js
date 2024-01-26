const TABLE = 'user';
import bcrypt from '../../../adapter/bcrypt.js';
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
        const passwordHash = await bcrypt.hash(data.password)
        const authData = {
            id: data.id,
            username: data.username,
            password: passwordHash
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