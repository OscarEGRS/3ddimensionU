import { Link } from "react-router-dom";
function ArticuloCarrito({articulo}){
    
    return(
                <div className="FlexItemCarrito">
                    <h3>{articulo.Nombre}</h3>
                    <p className="nombrearticulo">{articulo.nombreArticulo}</p>
                    <p className="precio">ETH {articulo.precio}</p>

                   
                </div>


    );

}
export default ArticuloCarrito;