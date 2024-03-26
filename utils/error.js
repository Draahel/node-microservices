const err = (message, code) => {
    let e = new Error(message);
    if(code) e.status = code;

    return e;
};

export default err;