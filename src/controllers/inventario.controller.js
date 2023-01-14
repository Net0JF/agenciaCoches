import { pool } from "../db.js";

export const getInventarios = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM Inventario");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM Inventario WHERE id = ?", [
            id,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Inventario not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM Inventario WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Inventario not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createInventarios = async (req, res) => {
    try {
        const { accesorios, autos, } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO Inventario (accesorios, autos,) VALUES (?, ?)",
            [accesorios, autos,]
        );
        res.status(201).json({ id: rows.insertId, accesorios, autos, });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const { accesorios, autos, } = req.body;

        const [result] = await pool.query(
            "UPDATE Inventarios SET accesorios = IFNULL(?, accesorios), autos, = IFNULL(?, autos,) WHERE id = ?",
            [accesorios, autos, , id]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "inventario not found" });

        const [rows] = await pool.query("SELECT * FROM inventarios WHERE id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
