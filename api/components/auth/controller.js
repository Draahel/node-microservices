import auth from "../../../adapter/auth.js";
import bcrypt from "../../../adapter/bcrypt.js";
const TABLE = 'auth';


export default (store) => {
    if (!store){
        throw new Error('[UserController] store is required');
    }

    const login = async (username, password) => {
        const user = await store.query(TABLE, { username });
        if (!user) return null;
        const verified = await bcrypt.compare(password, user.password)
        if (!verified) return null;
        delete user.password;
        return auth.sign(user);
    }

    const insert = (data) => {
        return store.insert(TABLE, data)
    };

    const update = (data) => {
        const id = data.id;
        const dataAuth = { id };
        const { username, password } = data;
        if (username) dataAuth.username = username;
        if (password) dataAuth.password = password;
        return store.upsert(TABLE, dataAuth);
    };

    return{
        insert,
        update,
        login 
    }
};