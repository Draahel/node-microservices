import auth from "../../../auth/index.js";

const checkAuth = (action) => {
    return (req, res, next) => {
        console.log('Action: ' + action);
        switch (action) {
            case 'update':
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;
        
            default:
                next();
        }
    }
}

export default checkAuth;