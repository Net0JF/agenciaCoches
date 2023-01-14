import { pool } from "../db.js";

export const getVentas = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM venta");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM Venta WHERE id = ?", [
            id,
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
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM Venta WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Venta not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createVentas = async (req, res) => {
    try {
        const { precio, productos } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO Venta (precio, productos) VALUES (?, ?)",
            [precio, productos]
        );
        res.status(201).json({ id: rows.insertId, precio, productos });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const { precio, productos } = req.body;

        const [result] = await pool.query(
            "UPDATE Ventas SET precio = IFNULL(?, precio), productos = IFNULL(?, productos) WHERE id = ?",
            [precio, productos, id]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Ventas not found" });

        const [rows] = await pool.query("SELECT * FROM Ventas WHERE id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
