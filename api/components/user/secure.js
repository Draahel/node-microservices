import auth from "../../../auth/index.js";

const checkAuth = (action) => {
    return (req, res, next) => {
        switch (action) {
            case 'update':
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;
            case 'follow':
                console.log('following');
                auth.check.logged(req);
                next();
                break;
            default:
                next();
        }
    }
}

export default checkAuth;