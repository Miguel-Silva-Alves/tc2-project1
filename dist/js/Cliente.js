"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    // Método opcional para exibir as informações do estudante
    exibirInfo() {
        return `Cliente -> ID: ${this.id}, Nome: ${this.nome}`;
    }
}
exports.Cliente = Cliente;
