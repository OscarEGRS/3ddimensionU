import { createContext } from "react";
import { useContext, useState } from "react";
import { tomarArticulosReq } from "../api/articulos.api";
import { borrarArticuloReq } from "../api/articulos.api";
import { crearArticulosReq } from "../api/articulos.api";
import { tomarArticuloEReq } from "../api/articulos.api";
import { tomarArticulosCarritoReq } from "../api/articulos.api";
import { tomarCarritoEReq } from "../api/articulos.api";
import { crearCarritoUnidadReq } from "../api/articulos.api";
import { PagarReq } from "../api/articulos.api";
import { Navigate, useNavigate } from "react-router-dom";

export const ArticulosContext = createContext();

export const useArticulos = ()=>{
    const contexto = useContext(ArticulosContext);

    if (!contexto){
        throw new Error("useArticulos no puede ser usado fuera de de un articulosContextProvider")
    }

    return contexto;
}

export const ArticulosContextProvider = ({children}) => {
    const [articulos,setArticulos] = useState([]);
    const [carritos,setCarritos] = useState([]);
    const [busquedas,setBusqueda] = useState("");

    const navigate = useNavigate(); 

        async function cargarArticulos(){

            const respuesta = await tomarArticulosReq();
            setArticulos(respuesta.data.resultado);
            console.log(respuesta.data.resultado);


        }


        const borrarArticulo = async(id) =>{

            try {
               const respuesta = await borrarArticuloReq(id);
               setArticulos(articulos.filter(articulo => articulo.idarticulos !== id));
                console.log(respuesta);
    
            } catch (error) {
                console.log(error);
            }
        }


        
        async function cargarArticuloE(usuario){

            const respuesta = await tomarArticuloEReq(usuario);
            setArticulos(respuesta.data.resultado);
            console.log(respuesta.data.resultado);

        }

        async function cargarArticuloCarrito(usuario){

            const respuesta = await tomarArticulosCarritoReq(usuario);
            setArticulos(respuesta.data.resultado);
            console.log(respuesta.data.resultado);

        }

        async function cargarCarritoE(usuario){

            const respuesta = await tomarCarritoEReq(usuario);
            setCarritos(respuesta.data.resultado);
            console.log(respuesta.data.resultado);

        }


        const crearArticulo = async(articulo)=>{
            try {
                const respuesta = await crearArticulosReq(articulo);
                console.log(respuesta);
            } catch (error) {
                console.log(error)
            }
        }
        async function crearCarritoUnidad(articulo){
  
            try {
                console.log("CarritoUnidad"+articulo)
                const respuesta = await crearCarritoUnidadReq(articulo);
                console.log("Respuesta "+respuesta.data.resultado.insertId);
                alert("Se ha agregado al carrito");
            } catch (error) {
                console.log(error)
            }
        }


        async function pagarCarrito(idCarrito) {
            try {
                console.log("CarritoUnidad" + idCarrito);
                const respuesta = await PagarReq(idCarrito);
                console.log(respuesta);
    
               
                navigate("/"); 
    
            } catch (error) {
                console.log(error);
            }
        }


    return<ArticulosContext.Provider value={{articulos,cargarArticulos,borrarArticulo,crearArticulo,cargarArticuloE,cargarArticuloCarrito,cargarCarritoE,crearCarritoUnidad,pagarCarrito,setBusqueda,busquedas,carritos}}>
        {children}

    </ArticulosContext.Provider>
}