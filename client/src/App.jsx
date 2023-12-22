import { Route, Routes } from "react-router-dom"
import PaginaArticulos from "./pages/paginaArticulos.jsx"
import PaginaNoEncontrada from "./pages/paginaNoEncontrado.jsx"
import BarraDeNavegacion from "./componentes/barraDeNavegacion.jsx"
import PaginaCrearArticulos from "./pages/paginaCrearArticulo.jsx"
import { ArticulosContextProvider } from "./context/ArticulosContext.jsx"
import './App.css'
import PaginaArticulosNormal from "./pages/paginaArticulosNormal.jsx"
import PaginaArticulosE from "./pages/paginaArticuloE.jsx"
import PaginaCarrito from "./pages/paginaCarrito.jsx"
import PaginaIniciarSesion from "./pages/paginaInicarsesion.jsx"
import PaginaRegistrar from "./pages/paginaRegistrar.jsx"
import { UsuarioContextProvider } from "./context/UsuarioContext.jsx"
import PaginaProtegida from "./pages/protectRoute.jsx"
import { Link } from "react-router-dom"
import PaginaTodosLosArticulos from "./pages/paginaTodosLosArticulos.jsx"
import PaginaEdificios from "./pages/paginaEdificios.jsx"
import PaginaAnime from "./pages/paginaAnime.jsx"
import PaginaCalaveras from "./pages/paginaCalveras.jsx"
function App() {

  return (
    <UsuarioContextProvider>
   <ArticulosContextProvider>

    <div className="GridContainer">
      <div className="GridNav">
            <div className="GridNav">
              <div className="CajaContenedora">
              <BarraDeNavegacion></BarraDeNavegacion>



              </div>

              
              
              
            </div>    

      </div>

      <div className="GridMain">
      <Routes>

        <Route path="/" element={<PaginaArticulosNormal/>}/>
        <Route element={<PaginaProtegida/>}>
          <Route path="/carrito" element={<PaginaCarrito/>}/>
          <Route path="/articulo/:id" element={<PaginaArticulosE/>}/>
          <Route path="/crearArticulo" element={<PaginaCrearArticulos/>}/>
          <Route path="/articulosAdmin" element={<PaginaArticulos/>}/>

        </Route>  
        <Route path="/iniciarsesion" element={<PaginaIniciarSesion/>}/>

        <Route path="/registrarse" element={<PaginaRegistrar/>}/>
        <Route path="/articulos" element={<PaginaTodosLosArticulos/>}/>
        <Route path="/edificios" element={<PaginaEdificios/>}/>
        <Route path="/anime" element={<PaginaAnime/>}/>
        <Route path="/calaveras" element={<PaginaCalaveras/>}/>

        <Route path="*" element={<PaginaNoEncontrada/>}/>

      </Routes>

      </div>

      <div className="GridAside">
        <div className="FlexContainerAside">

        <h3>Categorias</h3>


        <Link className="FlexItemAside" to="/edificios">Edificios</Link>
        <br/>

        <Link className="FlexItemAside" to="/anime">Anime</Link>
        <br/>

        <Link className="FlexItemAside" to="/calaveras">Calaveras</Link>

        </div>

      </div>

      <div className="GridFooter">
          Power by OscarEGRS & IvanoCracia

      </div>



    </div>
   

   </ArticulosContextProvider>
   </UsuarioContextProvider>
  )
}

export default App