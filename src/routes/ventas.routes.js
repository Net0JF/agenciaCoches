import { Router } from "express";
import {
    createVenta,
    deleteVenta,
    getVenta,
    getVentas,
    updateVenta,
} from "../controllers/ventas.controller.js";

const router = Router();

// GET all Ventas
router.get("/ventas", getVentas);

// GET An Venta
router.get("/ventas/:idVenta", getVenta);

// DELETE An Venta
router.delete("/ventas/:idVenta", deleteVenta);

// INSERT An Venta
router.post("/ventas", createVenta);

router.patch("/ventas/:idVenta", updateVenta);

export default router;
