import { Router } from "express";
import {
    createEmpleado,
    deleteEmpleado,
    getEmpleado,
    getEmpleado,
    updateEmpleado,
} from "../controllers/Empleados.controller.js";

const router = Router();

// GET all Empleados 
router.get("/empleados", getEmpleados);

// GET An Employee
router.get("/empleados/:id", getEmpleados);

// DELETE An Employee
router.delete("/empleados/:id", deleteEmpleados);

// INSERT An Employee
router.post("/empleados", createEmpleados);

router.patch("/empleados/:id", updateEmpleados);

export default router;
