import { Formik, Form } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import { useEffect, useState } from "react";

function PaginaIniciarSesion() {
  const { usuario, cargarUsuario, verificarUsuario, uIsActive,setUIsActive} = useUsuario();

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
            contrasena: ""
          }}
          onSubmit={async (valores, actions) => {
            console.log(valores);

            cargarUsuario(valores);

            
            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit} className="FlexItemIniciar">
              <label className="FlexItemIniciar">Email</label>
              <input
                className="FlexItemIniciar"
                type="text"
                name="usuario"
                placeholder=""
                onChange={handleChange}
                value={values.usuario}
              ></input>
              <label className="FlexItemIniciar">Contraseña</label>
              <input
                className="FlexItemIniciar"
                type="password"
                name="contrasena"
                placeholder=""
                onChange={handleChange}
                value={values.contrasena}
              ></input>

              <button className="FlexItemIniciar" type="submit">
                Iniciar sesión
              </button>
              <p className="FlexItemIniciar">
                ¿Nuevo en 3d dimension?{" "}
                <Link to="/registrarse" className="linkForm">
                  Unete ahora
                </Link>
              </p>
            </Form>
          )}
        </Formik>

        <img className="FlexItemIniciar" src="afternoon.jpg" alt="Afternoon"></img>
      </div>
    </>
  );
}

export default PaginaIniciarSesion;
