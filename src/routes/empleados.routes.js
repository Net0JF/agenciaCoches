import { Router } from "express";
import {
    getEmpleados,
    getEmpleado,
    deleteEmpleado,
    createEmpleado,
    updateEmpleado,
} from "../controllers/empleados.controller.js";

const router = Router();

// GET all Empleados 
router.get("/empleados", getEmpleados);

// GET An Employee
router.get("/empleados/:idEmpleado", getEmpleado);

// DELETE An Employee
router.delete("/empleados/:idEmpleado", deleteEmpleado);

// INSERT An Employee
router.post("/empleados", createEmpleado);

router.patch("/empleados/:idEmpleado", updateEmpleado);

export default router;
