const db = {
    users: [
        {
            id: '257b30bb-9395-4eb3-b66c-85e562db5426', 
            name: 'John',
            username: 'JohnSi',
        },
    ],
    auth: [
        {
            id: '257b30bb-9395-4eb3-b66c-85e562db5426',
            username: 'JohnSi',
            password: '$2b$05$U0d1LIaEuS3gk8NXId40juavj3Tx.6M3RJ42hEno6XF2/LyJysi1q',
        }
    ],
};

const list = async (table) => {
    return db[table];
};

const get = async (table, id) => {
    const col = await list(table);
    return col.filter( item => item.id ===id)[0] || null;
};

const query = async (table, q) => {
    const keys = Object.keys(q);
    const key = keys[0];
    return db[table].filter( item => item[key] === q[key])[0] || null;
};

const upsert = async (table, data) => {
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
    query,
    upsert,
    remove,
};