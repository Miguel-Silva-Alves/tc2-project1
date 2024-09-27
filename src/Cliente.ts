export class Cliente {
    id: number;
    nome: String;


    constructor(id: number, nome: String) {
        this.id = id;
        this.nome = nome;
    }

    // Método opcional para exibir as informações do estudante
    exibirInfo(): String {
        return `Cliente -> ID: ${this.id}, Nome: ${this.nome}`;
    }

}