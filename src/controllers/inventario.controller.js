import { pool } from "../db.js";

export const getCoches = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM inventario");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getCoche = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM inventario WHERE id = ?", [
            id,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "inventario not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteCoche = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM inventario WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "inventario not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createCoche = async (req, res) => {
    try {
        const { nombreCoche, marcaCoche, precioCoche} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO inventario (nombreCoche, marcaCoche, precioCoche) VALUES (?, ?, ?)",
            [nombreCoche, marcaCoche, precioCoche]
        );
        res.status(201).json({ idCoche: rows.insertId, nombreCoche, marcaCoche, precioCoche });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateCoche = async (req, res) => {
    try {
        const { idCoche } = req.params;
        const { nombreCoche, marcaCoche, precioCoche } = req.body;

        const [result] = await pool.query(
            "UPDATE inventario SET nombreCoche = IFNULL(?, nombreCoche), marcaCoche = IFNULL(?, marcaCoche), precioCoche = IFNULL(?, precioCoche) WHERE idCoche = ?",
            [nombreCoche, marcaCoche, precioCoche]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "inventario not found" });

        const [rows] = await pool.query("SELECT * FROM inventario WHERE id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
