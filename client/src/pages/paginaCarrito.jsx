import { useEffect  } from "react";
import ArticuloComponenteAdmin from "../componentes/articulosAdmin";
import { useArticulos } from "../context/ArticulosContext";
import ArticuloComponenteNormal from "../componentes/articulosNormal";
import { useUsuario } from "../context/UsuarioContext";
import ArticuloCarrito from "../componentes/ariculosCarrito";
import MetaMaskButton from '../componentes/MetaMaskButton';
import abi from "../contractJson/pagar.json" 
import {ethers} from "ethers"
//0xaa33C2BFf286e9371c5DFbcA389c8CCD6Db085e1

function PaginaCarrito(){

    const {articulos,cargarArticuloCarrito,cargarCarritoE,carritos,pagarCarrito}= useArticulos();
    const { usuario, cargarUsuario, verificarUsuario, uIsActive,setUIsActive} = useUsuario();

    let valorTotal;
    articulos.map(articulo=>(
        valorTotal=articulo.totalCosto
        ))
 
    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to MetaMask!');
    
                // Create a new ethers provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);
    
                // Create a signer for the connected wallet
                const signer = provider.getSigner();
    
                // Connect to your contract using its address and ABI
                const contractAddress = '0x62e8128F5741E7Fca0943e45930D71B7476618d9';
                const contractABI = abi.abi;
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                console.log(valorTotal);
                let valor = valorTotal.toString();
                // Send money to the contract
                const transaction = await contract.sendPayment({ value: ethers.utils.parseEther(valor) });
                console.log('Transaction:', transaction);
    
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("MetaMask not detected!");
        }
    };

    useEffect(()=>{

        usuario.map(user=>(
            cargarArticuloCarrito(user.idusuarios)

            ))
            articulos.map(articulo=>(
                valorTotal=articulo.totalCosto
                ))
                console.log(valorTotal)


                usuario.map(user=>(
                    cargarCarritoE(user.idusuarios)
                         
                    ))

         


    },[])

    function renderizarArticulos() {
        if (articulos.length === 0) {
            return <h1>No hay aun articulos en el carrito</h1>;
        }
    
        return articulos
            .filter(articulo => articulo && articulo.idcarritounidad) // Filtra elementos nulos o sin idarticulos
            .map(articulo => (
                <ArticuloCarrito articulo={articulo} key={articulo.idcarritounidad} />
            ));
    }

    function renderizarCosto() {
        if (articulos.length === 0) {
            return <h1></h1>;
        }
    
        const primerArticulo = articulos.find(articulo => articulo && articulo.idcarritounidad);
    
        if (!primerArticulo) {
            return <h1>No hay artículos con idcarritounidad</h1>;
        }
    
        return <h3>Total a pagar ETH: {primerArticulo.totalCosto}</h3>;
    }
    
    
    

    return(<div>

        
      <div className="FlexContainerCarritoIndex">

      <div className="FlexItemCarrito"> <p className="parrafo">Modelo</p>
        <p className="parrafo">Precio unitario</p></div>      
       

    {
    renderizarArticulos()
    
    }

    {
        renderizarCosto() 
         /*  
       <button onClick={()=>  {if(articulos.length!==0){
    carritos.map(carrito=>(
                      
                      
        pagarCarrito(carrito.idcarrito) ));
}           }             
                    }>Pagar</button>
        */
    }
<div className="FlexItemCarrito"><MetaMaskButton connectMetaMask={connectMetaMask} /></div>  
      
      

</div>

        </div>)


}

export default PaginaCarrito;