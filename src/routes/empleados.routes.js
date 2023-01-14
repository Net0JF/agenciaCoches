import { Router } from "express";
import {
    createEmpleado,
    deleteEmpleado,
    getEmpleado,
    getEmpleados,
    updateEmpleado,
} from "../controllers/empleados.controller.js";

const router = Router();

// GET all Empleados 
router.get("/empleados", getEmpleados);

// GET An Employee
router.get("/empleados/:idEmpleado", getEmpleados);

// DELETE An Employee
router.delete("/empleados/:idEmpleado", deleteEmpleados);

// INSERT An Employee
router.post("/empleados", createEmpleados);

router.patch("/empleados/:idEmpleado", updateEmpleados);

export default router;
