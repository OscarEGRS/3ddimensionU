const { pool } = require("../db.js");

exports.getUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;
        console.log(usuario + "sds " + contrasena);
        const [resultado] = await pool.query('SELECT * FROM 3dddb.usuarios where nombre = ? and contraseña = ?', [usuario, contrasena]);

        res.json({
            resultado
        });

        console.log(resultado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.postUsuario = async (req, res) => {
    try {
        const { usuario, correo, contrasena } = req.body;

        const [resultado] = await pool.query('INSERT INTO usuarios (nombre, correo, contraseña, tipo) VALUES (?, ?, ?, ?)', [usuario, correo, contrasena, 'U']);

        res.json({
            resultado
        });

        console.log(resultado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
