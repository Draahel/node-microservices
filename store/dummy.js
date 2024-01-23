const db = {
    user: [
        {id: '1', name: 'Daniel'},
    ]
};

export const list = async (table) => {
    return db[table];
};

export const get = async (table, id) => {
    return db[table].find((item)=>item.id === id) || null;
};

export const upsert = async (table, data) => {
    db[table].push(data);
    return data;
};

export const remove = async (table, id) => {
    db[table] = db[table].filter((item) => item.id !== id);
};