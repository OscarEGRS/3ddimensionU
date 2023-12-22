import { Link } from "react-router-dom";
function ArticuloComponenteNormal({articulo}){


   


    return(



                <div className="FlexItem">
                    <h3 className="FlexItemItem">{articulo.Nombre}</h3>
                    <img className="FlexItemItem" src={`http://localhost:4000/storage/imgs/${articulo.url}` } ></img>

                    <p className="descripcionP FlexItemItem">{articulo.Descripcion}</p>
                    <p className="precio FlexItemItem">ETH {articulo.precio}</p>
                    <Link className="linkComprar FlexItemItem" to={`/articulo/${articulo.idarticulos}`}>

                    <button onClick={()=> console.log("Comprar")}>Comprar</button>
                    </Link>

                </div>


    );

}
export default ArticuloComponenteNormal;