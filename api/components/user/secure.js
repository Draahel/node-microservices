import auth from "../../../adapter/auth.js";

export default checkAut = (action) => {
    const middleware = (req, res, next) => {
        switch (action) {
            case 'update':
                const owner = req.body.id;
                auth.check.own(req, owner)
                break;
        
            default:
                next();
        }
    };

    return middleware
}