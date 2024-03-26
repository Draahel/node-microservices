import store from '../../../store/dummy.js';
import { v4 as uuidv4 } from 'uuid';
const TABLE = 'users';


export default (injectedStore) => {
    if (!injectedStore) injectedStore = store;

    const list = () => injectedStore.list(TABLE);
    
    const get = (id) => injectedStore.get(TABLE, id);

    const upsert = (data) => {
        let user = { name: data.name };
        if (data.id) user.id = data.id;
        else user.id = uuidv4();
        return injectedStore.upsert(TABLE, user)
    };

    const remove = (id) => injectedStore.remove(TABLE, id);

    return {
        list,
        get,
        upsert,
        remove,
    };
};