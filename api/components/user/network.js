import express from "express";
import controller from "./index.js";

const router = express.Router();

router.get("/", controller.list);

router.get("/:id", controller.get);

router.post("/", controller.insert);

router.put("/", controller.update);

router.delete("/:id", controller.remove)

export default router;