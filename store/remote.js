import axios from "axios";

const createRemoteDB = ( host, port ) =>{
    const apiCall = axios.create({
        baseURL: `${host}:${port}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const request = async (method, table, data) => {
        const response = await apiCall({
            method,
            url: `/${table}`,
            data,
        });

        return response.data.body;
    }

    const list = (table) => {
        return request('GET', table);
    };

    const get = (table, id) => {
        return request('GET', `${table}/${id}`);
    };

    const upsert = (table, data) => {
        return request('POST', `${table}`, data);
    };

    const query = (table, q, join) => {
        return request('GET', `${table}/query`, { query:q, join });
    };

    const remove = (table, id) => {
        return request('DELETE', `${table}/${id}`);
    };

    return {
        list,
        get,
        upsert,
        query,
        remove,
    }
    
};

export default createRemoteDB;