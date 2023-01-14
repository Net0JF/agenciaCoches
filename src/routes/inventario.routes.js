import { Router } from "express";
import {
    createCoche,
    deleteCoche,
    getCoche,
    getCoches,
    updateCoche,
} from "../controllers/coches.controller.js";

const router = Router();

// GET todos los Coches
router.get("/coches", getCoches);

// GET un Coche
router.get("/coches/:idCoche", getCoche);

// DELETE un Coche
router.delete("/coches/:idCoche", deleteCoche);

// INSERT un Coche
router.post("/coches", createCoche);

router.patch("/coches/:idCoche", updateCoche);

export default router;
