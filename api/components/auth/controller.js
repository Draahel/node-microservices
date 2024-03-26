import bcrypt from 'bcrypt';
import store from '../../../store/dummy.js';
import auth from '../../../auth/index.js';
import error from '../../../utils/error.js';

const TABLE = 'auth';

export default (injectedStore) => {
    if (!injectedStore) injectedStore = store;

    const login = async (username, password) => {
        const data = await injectedStore.query(TABLE, { username });
        return bcrypt.compare(password, data.password).then( result => {
            if (!data || !result) {
                throw error('Invalid information', 401);
            }
            delete data.password;
            return auth.sign(data);
        }) 
    };

    const upsert = (data) => {
        let authData = { id: data.id };
        if (data.username) authData.username = data.username;
        if (data.password) authData.password = data.password;
        return injectedStore.upsert(TABLE, authData)
    };

    return {
        login,
        upsert,
    };
};