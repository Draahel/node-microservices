const db = {
    users: [{id: '257b30bb-9395-4eb3-b66c-85e562db5426', name: 'John'}],
};

const list = async (table) => {
    return db[table];
};

const get = async (table, id) => {
    const col = await list(table);
    return col.filter( item => item.id ===id)[0] || null;
};

const upsert = async (table, data) => {
    // const user = await get(table, data.id);
    // if (user) throw new Error('User already exists')
    db[table].push(data);
    return data;
};

const remove = async (table, id) => {
    db[table] = db[table].filter(
        item => item.id !== id
    );
    return true;
};


export default {
    list,
    get,
    upsert,
    remove,
};