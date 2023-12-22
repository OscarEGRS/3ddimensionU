
import { Navigate, Outlet } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";


function PaginaProtegida(){

    const { usuario, cargarUsuario, verificarUsuario, uIsActive,setUIsActive} = useUsuario();


    if(!uIsActive){
        return <Navigate to="/iniciarsesion" replace />
    }


    return <Outlet />


}

export default PaginaProtegida;