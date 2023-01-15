import { pool } from "../db.js";

export const getVentas = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM ventas");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getVenta = async (req, res) => {
    try {
        const { idVenta } = req.params;
        const [rows] = await pool.query("SELECT * FROM ventas WHERE idVenta = ?", [
            idVenta,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Venta not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteVenta = async (req, res) => {
    try {
        const { idVenta } = req.params;
        const [rows] = await pool.query("DELETE FROM ventas WHERE idVenta = ?", [idVenta]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Venta not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createVenta = async (req, res) => {
    try {
        const { idEmpleado, idCoche} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO ventas (idEmpleado, idCoche) VALUES (?, ?)",
            [idEmpleado, idCoche]
        );
        res.status(201).json({ idVenta: rows.insertId, idEmpleado, idCoche });
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal" });
    }
};

export const updateVenta = async (req, res) => {
    try {
        const { idVenta } = req.params;
        const { idEmpleado, idCoche } = req.body;

        const [result] = await pool.query(
            "UPDATE ventas SET idEmpleado = IFNULL(?, idEmpleado), idCoche = IFNULL(?, idCoche) WHERE idVenta = ?",
            [idEmpleado, idCoche, idVenta]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Ventas not found" });

        const [rows] = await pool.query("SELECT * FROM ventas WHERE idVenta = ?", [
            idVenta,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
