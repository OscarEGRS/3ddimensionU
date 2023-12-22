const { Router } = require("express");
const { pool } = require("../db.js");

const router = Router();

router.get('/ping', async(req,res)=>{
    const [rows] = await pool.query('SELECT * from articulos');

    const articulos = rows.map(row => ({
      nombre: row.idarticulos,
      articuloid: "articulo"
    }));
    
    res.json({ articulos });
})

module.exports = router;
