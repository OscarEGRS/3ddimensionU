const express = require('express');
const port = require('./conf.js').port;
const indexRoutes = require('./routes/index.routes.js');
const articulosRoutes = require('./routes/articulos.routes.js');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(cors());
app.use(express.json());
console.log(__dirname);

const publicPath = path.join(__dirname, 'storage');
console.log(publicPath);
app.use('/storage', express.static(publicPath));

app.use(indexRoutes);
app.use(articulosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
