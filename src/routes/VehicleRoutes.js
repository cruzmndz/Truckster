import express from "express";
import {list, create, remove} from "../controllers/VehicleController";

const router = express.Router();

router.get("/vehicles", list);
router.post("/vehicles", create);
router.delete("/vehicles/:id", remove);

export default router;