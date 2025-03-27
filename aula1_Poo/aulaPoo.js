const prompt = require("prompt-sync")();

class Cliente {

    nome;
    idade;
    cpf;
    agencia;
}

let cliente = new Cliente ();

cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = prompt("Digite sua idade ");
cliente.cpf = prompt ("Digite seu CPF/Cnpj ");
cliente.agencia = prompt ("Digite o número da sua agência ");

console.log (cliente);
