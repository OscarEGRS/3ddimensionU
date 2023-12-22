import { useEffect } from "react";
import ArticuloComponenteAdmin from "../componentes/articulosAdmin";
import { useArticulos } from "../context/ArticulosContext";
import ArticuloComponenteNormal from "../componentes/articulosNormal";
import { useUsuario } from "../context/UsuarioContext";
function PaginaCalaveras() {
  const { articulos, cargarArticulos,busquedas } = useArticulos();
  const { usuario, cargarUsuario, verificarUsuario, uIsActive } = useUsuario();

  useEffect(() => {
    cargarArticulos();
   
  }, []);

  function renderizarArticulosCategoria(categoria) {
    const articulosFiltrados = articulos
      .filter(
        (articulo) =>
          articulo && articulo.idarticulos && articulo.categoria === categoria
      );

    if (articulosFiltrados.length === 0) {
      return <h1>No hay artículos de la categoría "edificios"</h1>;
    }

    return articulosFiltrados.map((articulo) => (
      <ArticuloComponenteNormal
        articulo={articulo}
        key={articulo.idarticulos}
      />
    ));
  }





 


  return (
    <div>
      <h2 id="Edificios" >Categoria Calaveras</h2>

      <img
        src="blue-fire-f9lpf7xqzat1qyvf.jpg"
        className="masvendidosImg"
      ></img>

      <div className="FlexContainer" >{renderizarArticulosCategoria("calaveras")}</div>

    
      <br></br>
      <img src="fondoinvierno.png" className="masvendidosImg"></img>
    </div>
  );
}

export default PaginaCalaveras;
