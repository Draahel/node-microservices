import express from "express";
import controller from "./index.js";
import * as response from '../../../network/response.js';

const router = express.Router();

router.get("/", list);

router.get("/:id", get);

router.post("/", insert);

router.put("/", update);

router.delete("/:id", remove)

function list (req, res) {
    return controller.list().then(
        (list) => response.success(res, list)
    ).catch(
        (err) => response.error(res, err.message)
    );
};

function get (req, res) {
    const id = req.params.id;
    return controller.get(id).then(
        (user) => response.success(res, user)
    ).catch(
        (err) => response.error(res, err.message)
    );
};

function insert (req, res) {
    const data = req.body;
    return controller.insert(data).then(
        (user) => response.success(res, user)
    ).catch(
        (err) => response.error(res, err.message)
    );
};

function update (req, res) {
    const data = req.body;
    return controller.update(data).then(
        (user) => response.success(res, user)
    ).catch(
        (err) => response.error(res, err.message)
    );
};

function remove (req, res) {
    const id = req.params.id;
    return controller.remove(id).then(
        (user) => response.success(res, user)
    ).catch(
        (err) => response.error(res, err.message)
    );
};

export default router;