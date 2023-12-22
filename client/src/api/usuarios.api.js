import axios from "axios";
import { urlServer } from "./conf";

const axiosInstancia = axios.create({
    baseURL: urlServer
});
export const TomarUsuarioEReq = async (usuario)=>{
    console.log("usuarios "+usuario);
    return await axiosInstancia.post("/usuario",usuario)


}

export const CrearUsuarioReq = async (usuario)=>{
    console.log("usuarios"+usuario);
    return await axiosInstancia.post("/crearUsuario",usuario)
    

}

