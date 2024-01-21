const db = {
    user: [
        {id: 1, name: 'Daniel'},
    ]
};

export const list = (table) => {
    return db[table];
};

export const get = (table, id) => {
    return db[table].find((item)=>item.id === id) || null;
};

export const upsert = (table, data) => {
    db[table].push(data);
    return data;
};

export const remove = (table, id) => {
    const index = db[table].findIndex((item)=>item.id === id);
    db[table].slice(index, 1);
};