import { useEffect } from "react";
import ArticuloComponenteAdmin from "../componentes/articulosAdmin";
import { useArticulos } from "../context/ArticulosContext";
import ArticuloComponenteNormal from "../componentes/articulosNormal";
import { useUsuario } from "../context/UsuarioContext";
function PaginaTodosLosArticulos() {
  const { articulos, cargarArticulos,busquedas } = useArticulos();
  const { usuario, cargarUsuario, verificarUsuario, uIsActive } = useUsuario();

  useEffect(() => {
    cargarArticulos();
    console.log(uIsActive);
    if (busquedas) {
      console.log("si existe: "+busquedas);
    } else {
      console.log("busquedas no está definido");
    }
  }, []);

  function renderizarArticulos() {
    if (articulos.length === 0) {
      return <h1>No hay artículos</h1>;
    }

    const articulosFiltrados = articulos.filter((articulo) => {
      if (busquedas) {
        return articulo.Nombre.toLowerCase().includes(busquedas.toLowerCase());
      } else {
        console.log("no esta definido")
        return articulos;
      }
    });

    if (articulosFiltrados.length === 0) {
      return <h1>No hay resultados</h1>;
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
      <h2 id="Edificios" >Articulos</h2>

      <img
        src="todoslosarticulos.png"
        className="masvendidosImg"
      ></img>

      <div className="FlexContainer" >{renderizarArticulos()}</div>

    
      <br></br>
      <img src="fondoinvierno.png" className="masvendidosImg"></img>
    </div>
  );
}

export default PaginaTodosLosArticulos;
