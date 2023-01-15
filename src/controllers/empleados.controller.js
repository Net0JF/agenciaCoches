import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM empleados");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getEmpleado = async (req, res) => {
    try {
        const { idEmpleado } = req.params;
        const [rows] = await pool.query("SELECT * FROM empleado WHERE idEmpleado = ?", [
            idEmpleado,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Empleado not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteEmpleado = async (req, res) => {
    try {
        const { idEmpleado } = req.params;
        const [rows] = await pool.query("DELETE FROM empleado WHERE idEmpleado = ?", [idEmpleado]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Empleado not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createEmpleado = async (req, res) => {
    try {
        const { nombreEmpleado, salarioEmpleado } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO empleado (nombreEmpleado, salarioEmpleado) VALUES (?, ?)",
            [nombreEmpleado, salarioEmpleado]
        );
        res.status(201).json({ idEmpleado: rows.insertId, nombreEmpleado, salarioEmpleado });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateEmpleado = async (req, res) => {
    try {
        const { idEmpleado } = req.params;
        const { nombreEmpleado, salarioEmpleado } = req.body;

        const [result] = await pool.query(
            "UPDATE empleados SET nombreEmpleado = IFNULL(?, nombreEmpleado), salarioEmpleado = IFNULL(?, salarioEmpleado) WHERE idEmpleado = ?",
            [nombreEmpleado, salarioEmpleado, idEmpleado]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Empleado not found" });

        const [rows] = await pool.query("SELECT * FROM empleados WHERE idEmpleado = ?", [
            idEmpleado,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
