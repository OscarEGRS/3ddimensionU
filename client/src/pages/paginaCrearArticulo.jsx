import React from "react";
import { Formik, Form, Field } from "formik";
import { useArticulos } from "../context/ArticulosContext";
import BarraDeNavegacion from "../componentes/barraDeNavegacion";

function PaginaCrearArticulos() {
  const { crearArticulo } = useArticulos();

  return (
    <div>
      <h1>Pagina Crear Articulos</h1>
      <div >
        <Formik 
          initialValues={{
            nombre: "",
            descripcion: "",
            precio:"",
            categoria:"",
            imagen: null, // Nuevo campo para la imagen
          }}
          onSubmit={async (valores, actions) => {
            const formData = new FormData();
            formData.append("nombre", valores.nombre);
            formData.append("descripcion", valores.descripcion);
            formData.append("precio", valores.precio);
            formData.append("categoria", valores.categoria);

            formData.append("imagen", valores.imagen); // Agregar la imagen al FormData

            console.log(valores);
            // Llamar a la función crearArticulo con FormData
            crearArticulo(formData);
            actions.resetForm();
          }}
        >
          {({ setFieldValue, handleSubmit, values }) => (
            <Form className="FlexContainerCrearArticulo" onSubmit={handleSubmit}>
              <label className="FlexItemCrearArticulo">Nombre</label>
              <Field className="FlexItemCrearArticulo" type="text" name="nombre" placeholder="Nombre" required=" " />
              <label className="FlexItemCrearArticulo" >Descripcion</label>
              <Field className="FlexItemCrearArticulo"
                as="textarea"
                name="descripcion"
                rows="3"
                placeholder="Escribe una descripcion"
              />

              <label className="FlexItemCrearArticulo" >Precio</label>
              <Field className="FlexItemCrearArticulo" type="text" name="precio" placeholder="Precio" />
              <label className="FlexItemCrearArticulo" >Categoria</label>
              <Field className="FlexItemCrearArticulo" type="text" name="categoria" placeholder="Categoria" />

              <label className="FlexItemCrearArticulo">Imagen</label>
              <input className="FlexItemCrearArticulo"
                type="file"
                name="imagen"
                onChange={(event) => {
                  setFieldValue("imagen", event.currentTarget.files[0]);
                }}
              />
              <button className="FlexItemCrearArticulo" type="submit">Crear</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PaginaCrearArticulos;
