const db = {
    user: [
        {id: '1', name: 'Daniel'},
    ],
    auth: [
        {id: '1', username: 'daniel', password: '12345'}
    ]
};

export const list = async (table) => {
    return db[table] || [];
};

export const get = async (table, id) => {
    return db[table].find((item)=>item.id === id) || null;
};

export const insert = async (table, data) => {
    db[table].push(data);
    return data;
};

export const update = async (table, data) => {
    db[table] = db[table].map((item) => item.id === data.id ? {...item, ...data} : item);
    return data;
};

export const remove = async (table, id) => {
    db[table] = db[table].filter((item) => item.id !== id);
};

export const query = async (tabla, q) => {
    const col = await list(tabla);
    const keys = Object.keys(q);
    const key = keys[0];
    return col.find( item => item[key] == q[key] ) || null;
};