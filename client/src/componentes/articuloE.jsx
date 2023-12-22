import { Link } from "react-router-dom";
import { useArticulos } from "../context/ArticulosContext";
import { useUsuario } from "../context/UsuarioContext";

function ArticuloComponenteE({ articulo }) {
  const { articulos, cargarArticuloE, cargarCarritoE, carritos,crearCarritoUnidad } =
    useArticulos();
  const { usuario, cargarUsuario } = useUsuario();

  return (

    <div className="FlexContainerEspecifico">
    { articulos.map((articulo) => {
     return <img src={`http://localhost:4000/storage/imgs/${articulo.url}`} className="FlexItemEspecificoImg" key={articulo.idarticulos}></img>
  })}
    
    <div className="FlexItemEspecifico">
      <h3>{articulo.Nombre}</h3>

      <p className="descripcionP">{articulo.Descripcion}</p>
      <p className="precio">ETH {articulo.precio}</p>

      <Link className="linkComprar">
        <button
          className="bottonPCarrito"
          onClick={() =>
            carritos.map((carrito) =>
              articulos.map((articulo) => {

                const data = {
                  carritoId: carrito.idcarrito,
                  articuloId: articulo.idarticulos,
                };


                console.log(data);
                crearCarritoUnidad(data);
              })
            )
          }
        >
          Poner en el carrito
        </button>
      </Link>
    </div>
    </div>
  );
}
export default ArticuloComponenteE;
