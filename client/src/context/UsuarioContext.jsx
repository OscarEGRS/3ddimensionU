import { createContext } from "react";
import { useContext, useState } from "react";
import { tomarArticulosReq } from "../api/articulos.api";
import { TomarUsuarioEReq } from "../api/usuarios.api";
import { CrearUsuarioReq } from "../api/usuarios.api";

export const UsuarioContext = createContext();

export const useUsuario = ()=>{
    const contexto = useContext(UsuarioContext);

    if (!contexto){
        throw new Error("useUsuario no puede ser usado fuera de de un articulosContextProvider")
    }

    return contexto;
}

export const UsuarioContextProvider = ({children}) => {
    const [usuario,setUsuario] = useState([]);
    const [uIsActive, setUIsActive] = useState(false);

        async function cargarUsuario(usuario){

            const respuesta = await TomarUsuarioEReq(usuario);
            setUsuario(respuesta.data.resultado);
            console.log(respuesta.data.resultado);

        }

        function cerrarSesion() {
            setUsuario([]); // Limpiar usuario al cerrar sesión.
            setUIsActive(false); // Actualiza el estado de inicio de sesión al cerrar sesión.
          }
          async function verificarUsuario() {
            if (usuario.length !== 0) {
              setUIsActive(true);
            }
          }

          async function CrearUsuario(usuario) {
      
            const respuesta = await CrearUsuarioReq(usuario);
            console.log(respuesta.data.resultado);
            if(respuesta.data.resultado.affectedRows==1)
                alert("Se creo el usuario exitosamente")
            
          }
        

     

    


    return<UsuarioContext.Provider value={{usuario,cargarUsuario,verificarUsuario,uIsActive,setUIsActive,cerrarSesion,CrearUsuario}}>
        {children}

    </UsuarioContext.Provider>
}