import React from 'react';
import { useArticulos } from '../context/ArticulosContext';
import { useUsuario } from '../context/UsuarioContext';

const MetaMaskButton = ( ) => {
  const { cargarCarritoE, carritos,pagarCarrito,articulos } = useArticulos();
  const { usuario } = useUsuario();

  const handleClick = async () => {
    // Realiza la conexión a MetaMask de manera asíncrona

    // Imprime un mensaje en la consola
    console.log('Botón clickeado');

    // Carga información de usuario y carrito
    usuario.forEach((user) => {
      cargarCarritoE(user.idusuarios);
    });

    // Muestra información sobre carritos en la consola
    if(articulos.length!==0){
    carritos.forEach((carrito) => {
      pagarCarrito(carrito.idcarrito);
    });
  };}

  return (
    <button onClick={handleClick}>
      Pagar
    </button>
  );
};

export default MetaMaskButton;