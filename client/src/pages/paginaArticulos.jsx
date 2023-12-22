import { useEffect  } from "react";
import ArticuloComponenteAdmin from "../componentes/articulosAdmin";
import { useArticulos } from "../context/ArticulosContext";
function PaginaArticulos(){

    const {articulos,cargarArticulos}= useArticulos();


    useEffect(()=>{
        cargarArticulos();

    },[])

    function renderizarArticulos() {
        if (articulos.length === 0) {
            return <h1>No hay artículos</h1>;
        }
    
        return articulos
            .filter(articulo => articulo && articulo.idarticulos) // Filtra elementos nulos o sin idarticulos
            .map(articulo => (
                <ArticuloComponenteAdmin articulo={articulo} key={articulo.idarticulos} />
            ));
    }

    return(<div>
        <h2>Modelos</h2>
        <div className="FlexContainer">

    {
    renderizarArticulos()
    }


</div>
        </div>)


}

export default PaginaArticulos;