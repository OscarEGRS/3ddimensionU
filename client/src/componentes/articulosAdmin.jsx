import { useArticulos } from "../context/ArticulosContext";

function ArticuloComponenteAdmin({articulo}){

    const{borrarArticulo} = useArticulos();

   


    return(


                 <div className="FlexItem">
        <h3 className="FlexItemItem">{articulo.Nombre}</h3>
        <img className="FlexItemItem" src={`http://localhost:4000/storage/imgs/${articulo.url}` } ></img>

        <p className="descripcionP FlexItemItem">{articulo.Descripcion}</p>
        <p className="precio FlexItemItem">ETH {articulo.precio}</p>
                    <button onClick={()=> borrarArticulo(articulo.idarticulos)}>Borrar</button>

                </div>


    );

}
export default ArticuloComponenteAdmin;