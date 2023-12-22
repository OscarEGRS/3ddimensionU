import axios from "axios";
import { urlServer } from "./conf";


const axiosInstancia = axios.create({
    baseURL: urlServer
});

export const tomarArticulosReq = async ()=>{
        return await axiosInstancia.get("/articulos");
      
}


export const crearArticulosReq = async (articulos)=>{
    console.log("articulos"+articulos);

    return await axiosInstancia.post("/articulos",articulos)

}


export const borrarArticuloReq = async (id)=>{
    return await axiosInstancia.delete(`/articulos/${id}`)
}

export const tomarArticuloEReq = async (id)=>{

    return await axiosInstancia.get(`/articulos/${id}`)
}

export const tomarArticulosCarritoReq = async (id)=>{

    return await axiosInstancia.get(`/articulosCarrito/${id}`)
}
export const tomarCarritoEReq = async (id)=>{

    return await axiosInstancia.get(`/carritos/${id}`)
}

export const crearCarritoUnidadReq = async (parametrosjson)=>{
            console.log("parametros"+parametrosjson)
    return await axiosInstancia.post("/carritos",parametrosjson)
}

export const PagarReq = async (carritoid)=>{
    console.log("parametros"+carritoid)
return await axiosInstancia.post(`/articulosCarrito/${carritoid}`)
}

