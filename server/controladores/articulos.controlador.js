const { pool } = require("../db.js");

exports.getArticulos = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * from articulos where estado = ?', 'A');
        res.json({
            resultado
        });

        console.log(resultado);
    } catch (error) {
        return res.status(300).json({ "message": "contado al backend pero sin base de datos" });
    }
};

exports.postArticulo = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file.filename);

        const { descripcion, nombre, precio, categoria } = req.body;

        const imagen = req.file ? req.file.buffer : null;

        const [resultado] = await pool.query(
            "INSERT INTO `3dddb`.`articulos` (`Nombre`, `Descripcion`,`precio`,`url`,`categoria`,`estado`) VALUES (?, ?, ?, ?,?,?)",
            [nombre, descripcion, precio, req.file.filename, categoria, 'A']
        );

        res.json({
            id: resultado.insertId,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getArticulo = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * from articulos where idarticulos=?', [req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteArticulo = async (req, res) => {
    try {
        const [resultado] = await pool.query('UPDATE `3dddb`.`articulos` SET `estado` = ? WHERE (`idarticulos` = ? )', ['I', req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.putArticulo = async (req, res) => {
    try {
        const { nombre } = req.body;

        const [resultado] = await pool.query('UPDATE `3dddb`.`articulos` SET `Nombre` = ? WHERE (`idarticulos` = ? )', [nombre, req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getArticuloCarrito = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * from vistacarrito where idUsuario=?', [req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getCarritoE = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * from carrito where idUsuario=?', [req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.postCarritoUnidad = async (req, res) => {
    try {
        console.log(req.body);
        const { carritoId, articuloId } = req.body;
        console.log("CarritoUnidadBackend" + carritoId + " " + articuloId);
        const [resultado] = await pool.query('INSERT INTO carritounidad (idCarrito, idArticulo, estado) VALUES (?, ?, ?)', [carritoId, articuloId, 'A']);
        console.log("resultado" + resultado.insertId);

        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteCarritoUnidades = async (req, res) => {
    try {
        const [resultado] = await pool.query('UPDATE carritounidad SET estado = ? WHERE idCarrito = ?', ['I', req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.crearVenta = async (req, res) => {
    try {
        const [resultado] = await pool.query('CALL ProcesoCrearVentaDetalle(?)', [req.params.id]);
        res.json({
            resultado
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
