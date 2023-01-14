import { pool } from "../db.js";

export const getInventarios = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM inventario");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getinventario = async (req, res) => {
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

export const deleteinventario = async (req, res) => {
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

export const createInventarios = async (req, res) => {
    try {
        const { nombreAuto, marcaAuto} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO inventario (nombreAuto, marcaAuto) VALUES (?, ?)",
            [nombreAuto, marcaAuto]
        );
        res.status(201).json({ idAuto: rows.insertId, nombreAuto, marcaAuto });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updateinventario = async (req, res) => {
    try {
        const { idAuto } = req.params;
        const { nombreAuto, marcaAuto, } = req.body;

        const [result] = await pool.query(
            "UPDATE inventario SET nombreAuto = IFNULL(?, nombreAuto), marcaAuto = IFNULL(?, marcaAuto,) WHERE idAuto = ?",
            [nombreAuto, marcaAuto, , idAuto]
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
