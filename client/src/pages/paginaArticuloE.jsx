import { useEffect  } from "react";
import { useArticulos } from "../context/ArticulosContext";
import { useParams } from "react-router-dom";
import ArticuloComponenteE from "../componentes/articuloE";
import { useUsuario } from "../context/UsuarioContext";
function PaginaArticulosE(){
    const { id } = useParams();

    const {articulos,cargarArticuloE,cargarCarritoE,carritos}= useArticulos();
    const {usuario,cargarUsuario}= useUsuario();


    useEffect(()=>{
        console.log(id);
        cargarArticuloE(id);
        usuario.map(user=>(
            cargarCarritoE(user.idusuarios)
                 
            ))

            



    },[])

    function renderizarArticulos (){
        if (articulos.length===0){return <h1>No hay articulos</h1>}

        return  articulos.map(articulo=>(
            <ArticuloComponenteE articulo={articulo} key={articulo.idarticulos}/>
        ))
    }

    return(<div>
        <h2>Comprar</h2>
        
      
    {
    renderizarArticulos()
    }


        </div>)


}

export default PaginaArticulosE;