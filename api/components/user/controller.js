import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import store from '../../../store/dummy.js';
import auth from '../auth/index.js';

const TABLE = 'user';


export default (injectedStore) => {
    if (!injectedStore) injectedStore = store;

    const list = () => injectedStore.list(TABLE);
    
    const get = (id) => injectedStore.get(TABLE, id);

    const upsert = async (data) => {
        let user = { 
            name: data.name,
            username: data.username
        };

        if (data.id) user.id = data.id;
        else user.id = uuidv4();

        if (data.password || data.email) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: await bcrypt.hash(data.password, 5),
            });
        }

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