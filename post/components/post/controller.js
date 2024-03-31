import { v4 as uuidv4 } from 'uuid';
import store from '../../../store/dummy.js';

const TABLE = 'post';

export default (injectedStore) => {
    if (!injectedStore) injectedStore = store;

    const list = () => injectedStore.list(TABLE);
    
    const get = (id) => injectedStore.get(TABLE, id);

    const upsert = async (data) => {
        let post = {
            title: data.title,
            user: data.user
        };

        if (data.id) post.id = data.id;
        else post.id = uuidv4();

        return injectedStore.upsert(TABLE, post)
    };

    const remove = (id) => injectedStore.remove(TABLE, id);

    return {
        list,
        get,
        upsert,
        remove,
    };
};