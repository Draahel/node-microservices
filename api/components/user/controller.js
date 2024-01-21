import * as store from '../../../store/dummy.js';

const TABLE = 'user';

export const list = () => store.list(TABLE);

export const get = (id) => store.get(TABLE, id);

export const upsert = (data) => store.upsert(TABLE, data);

export const remove = (id) => store.remove(TABLE, id);