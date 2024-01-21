import express from "express";
import * as response from '../../../network/response.js';
import * as controller from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    const list = controller.list();
    response.success(res, list)
});

export default router;