import { useEffect } from "react";
import ArticuloComponenteAdmin from "../componentes/articulosAdmin";
import { useArticulos } from "../context/ArticulosContext";
import ArticuloComponenteNormal from "../componentes/articulosNormal";
import { useUsuario } from "../context/UsuarioContext";
function PaginaArticulosNormal() {
  const { articulos, cargarArticulos } = useArticulos();
  const { usuario, cargarUsuario, verificarUsuario, uIsActive } = useUsuario();

  useEffect(() => {
    cargarArticulos();
    console.log(uIsActive);
  }, []);

  function renderizarArticulos() {
    if (articulos.length === 0) {
      return <h1>No hay artículos</h1>;
    }

    return articulos
      .filter((articulo) => articulo && articulo.idarticulos) // Filtra elementos nulos o sin idarticulos
      .map((articulo) => (
        <ArticuloComponenteNormal
          articulo={articulo}
          key={articulo.idarticulos}
        />
      ));
  }

  function renderizarArticulosCategoria(categoria) {
    const articulosFiltrados = articulos
      .filter(
        (articulo) =>
          articulo && articulo.idarticulos && articulo.categoria === categoria
      )
      .slice(0, 6);

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
      <h2 id="Edificios" >Edificios</h2>

      <img
        src="low-poly-art-casa-del-arbol.jpg"
        className="masvendidosImg"
      ></img>

      <div className="FlexContainer" >{renderizarArticulosCategoria("edificios")}</div>
      <h2 id="Anime" >Anime</h2>

      <img
        src="3157414321.jpg"
        className="masvendidosImg"
      ></img>
      <div className="FlexContainer">{renderizarArticulosCategoria("anime")}</div>
      <h2>Calaveras</h2>
      <img
        src="blue-fire-f9lpf7xqzat1qyvf.jpg"
        className="masvendidosImg"
      ></img>
      <div className="FlexContainer">{renderizarArticulosCategoria("calaveras")}</div>

      <br></br>
      <img src="fondoinvierno.png" className="masvendidosImg"></img>
    </div>
  );
}

export default PaginaArticulosNormal;
