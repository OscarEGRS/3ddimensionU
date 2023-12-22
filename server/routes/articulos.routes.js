const { Router } = require("express");
const {
    deleteArticulo,
    getArticulo,
    getArticulos,
    postArticulo,
    putArticulo
} = require("../controladores/articulos.controlador.js");
const { getUsuario, postUsuario } = require("../controladores/usuarios.controlador.js");
const {
    getArticuloCarrito,
    getCarritoE,
    postCarritoUnidad,
    deleteCarritoUnidades,
    crearVenta
} = require("../controladores/articulos.controlador.js");
const path = require("path");
const multer = require("multer");

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/imgs');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

router.get("/articulos", getArticulos);

router.post("/articulos", upload.single("imagen"), postArticulo);

router.get("/articulos/:id", getArticulo);

router.delete("/articulos/:id", deleteArticulo);

router.put("/articulos/:id", putArticulo);

router.post("/usuario", getUsuario);

router.get("/articulosCarrito/:id", getArticuloCarrito);

router.get("/carritos/:id", getCarritoE);

router.post("/carritos", postCarritoUnidad);

router.delete("/articulosCarrito/:id", deleteCarritoUnidades);

router.post("/articulosCarrito/:id", crearVenta);

router.post("/crearUsuario", postUsuario);

module.exports = router;
