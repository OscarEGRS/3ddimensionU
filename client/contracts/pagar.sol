// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

// Definición del contrato llamado "pagar"
contract pagar {
    // Dirección del propietario del contrato, que puede recibir Ether
    address payable public owner;

    // Evento emitido cuando se recibe un pago
    event PaymentReceived(address indexed payer, uint256 amount);

    // Constructor del contrato, se ejecuta una vez durante la creación del contrato
    constructor() {
        // Asigna la dirección del creador del contrato como propietario
        owner = payable(msg.sender);
    }

    // Modificador que restringe el acceso a solo el propietario del contrato
    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el propietario puede llamar a esta funcion");
        _; // Placeholder para el cuerpo de la función modificada
    }

    // Función "receive" que permite al contrato recibir Ether directamente
    receive() external payable {
        // Emite el evento PaymentReceived al recibir un pago
        emit PaymentReceived(msg.sender, msg.value);
    }

    // Función "sendPayment" que permite a los usuarios enviar Ether al contrato
    function sendPayment() external payable {
        // Emite el evento PaymentReceived al recibir un pago
        emit PaymentReceived(msg.sender, msg.value);
    }

    // Función para que el propietario retire el saldo acumulado en el contrato
    function withdrawBalance() external onlyOwner {
        // Verifica que haya saldo disponible en el contrato
        require(address(this).balance > 0, "No hay saldo para retirar");
        
        // Transfiere el saldo acumulado al propietario
        owner.transfer(address(this).balance);
    }
}