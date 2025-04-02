const prompt = require("prompt-sync")();

// Classe é o modelo de atributos e funções para a criação de um objeto
class Cliente {

    nome; // Atributo
    idade;
    cpf;
    agencia;
}

// Objeto que possui as informações da classe de forma individual
let cliente = new Cliente ();



cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = prompt("Digite sua idade ");
cliente.cpf = prompt ("Digite seu CPF/Cnpj ");
cliente.agencia = prompt ("Digite o número da sua agência ");

console.log (cliente);
