
import { Formik,Form } from "formik";
import { Link } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import { useEffect } from "react";


function PaginaRegistrar(){

  

    const { usuario, cargarUsuario, verificarUsuario, uIsActive,setUIsActive,CrearUsuario} = useUsuario();

    useEffect(() => {
      verificarUsuario();
      console.log("activo: "+uIsActive);
    }, [usuario]);
  
    if (uIsActive) {
  
      return <Navigate to="/" />;
    }
  
    return (
      <>
        <h3>Iniciar Sesión</h3>
        <div className="FlexContainerIniciar">
          <Formik
            initialValues={{
              usuario: "",
              correo: "",
              contrasena: ""
            }}
            onSubmit={async (valores, actions) => {
              console.log(valores);
  
              CrearUsuario(valores);
  
              
              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit} className="FlexItemIniciar">
                <label className="FlexItemIniciar">Usuario</label>
                <input
                  className="FlexItemIniciar"
                  type="text"
                  name="usuario"
                  placeholder="Usuario"
                  onChange={handleChange}
                  value={values.usuario}
                ></input>
                <label className="FlexItemIniciar">Correo</label>
                <input
                  className="FlexItemIniciar"
                  type="text"
                  name="correo"
                  placeholder="Correo"
                  onChange={handleChange}
                  value={values.correo}
                ></input>
                <label className="FlexItemIniciar">Contraseña</label>
                <input
                  className="FlexItemIniciar"
                  type="password"
                  name="contrasena"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  value={values.contrasena}
                ></input>
  
                <button className="FlexItemIniciar" type="submit">
                  Registrarse
                 
                </button>

                <p className="FlexItemIniciar">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/iniciarsesion" className="linkForm">
                  Iniciar sesión
                </Link>
              </p>
              
             
              </Form>
            )}
          </Formik>
  
          <img className="FlexItemIniciar" src="globoaero.jpg" alt="Afternoon"></img>
        </div>
      </>
    );
         


}

export default PaginaRegistrar;