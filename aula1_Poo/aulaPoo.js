const prompt = require("prompt-sync")();

// Classe é o modelo de atributos e funções para a criação de um objeto
class Cliente {
// # -> priva o dado

    #nome; // Atributo
    idade;
    cpf;
    agencia;

    // retorna uma string com os dados/atributos
    getDescrição (){
        return "Nome" + this.#nome + " , idade " + this.idade;
    }

    // Obtem o nome
    getNome(){
        return this.#nome;
    }

    // Preenche nome
    setNome(nome){
        this.#nome = nome;
    }
}

// Objeto que possui as informações da classe de forma individual
let cliente = new Cliente ();

cliente.setNome("Teste"); // Cliente.setNome (Prompt("Digite o nome do cliente"));

cliente.idade = prompt("Digite sua idade ");
cliente.cpf = prompt ("Digite seu CPF/Cnpj ");
cliente.agencia = prompt ("Digite o número da sua agência ");

console.log (cliente);
console.log (cliente.getNome());
console.log (cliente.getDescrição()); // Descrição do console.log para usar o "getDescrição"

