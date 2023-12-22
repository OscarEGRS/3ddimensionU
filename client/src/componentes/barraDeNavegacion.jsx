import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { Formik, Form } from "formik";
import { useArticulos } from "../context/ArticulosContext";
import { useEffect } from "react";
import { useUsuario } from "../context/UsuarioContext";
import { urlServer } from "../api/conf";


function BarraDeNavegacion() {
  const { usuario, cargarUsuario, setUIsActive, uIsActive, cerrarSesion } =
    useUsuario();
  const { crearArticulo,setBusqueda,busquedas } = useArticulos();
  const navigate = useNavigate(); // Agrega esta línea
  useEffect(() => {
    cargarUsuario();
  }, [setUIsActive]);

  return (
    <div>
      <ul>
        <li>
          <Link className="aImagen3dD" to="/">
            <img
              className="Imagen3dD"
              src="3dD.png"
              alt="Logo"
            />
          </Link>
        </li>
        <li>
          <Formik
            initialValues={{
              buscar: "",
            }}
            onSubmit={async (valores, actions) => {
              console.log(valores);
              crearArticulo(valores);
              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="buscar"
                  placeholder="Buscar"
                  value={values.buscar}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setBusqueda(values.buscar);
                      navigate("/articulos");
                    }
                  }}
                  className="inputbuscar"
                ></input>
              </Form>
            )}
          </Formik>
        </li>
      
        <li>
          <Link to="/carrito" className="carritoA">
            <IoCartOutline className="carritoicono" />
          </Link>
        </li>
        <li>
          {uIsActive ? (
            <button onClick={() => cerrarSesion()}>Cerrar sesión</button>
          ) : (
            <Link to="/iniciarsesion">Iniciar Sesión</Link>
          )}
        </li>
        <li>
        {uIsActive ? (
          <Link to="/crearArticulo">Crear Articulo</Link>
          ) : (
          <div></div>
          )}
        </li>
        <li>

        {uIsActive ? (
          <Link to="/articulosAdmin">Borrar Articulos</Link>
          ) : (
          <div></div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default BarraDeNavegacion;
