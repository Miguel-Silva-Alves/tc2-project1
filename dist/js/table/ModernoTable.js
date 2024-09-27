"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernoTable = void 0;
// Implementação da classe Moderno
class ModernoTable {
    constructor(material, cor, altura, largura) {
        this.material = material;
        this.cor = cor;
        this.altura = altura;
        this.largura = largura;
    }
    hasGlass() {
        return this.material.toLowerCase().includes('glass');
    }
    setColor(color) {
        this.cor = color;
        return this.cor;
    }
    exibirInfo(upperCase) {
        let info = `Table Moderno - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
        return upperCase ? info.toUpperCase() : info;
    }
}
exports.ModernoTable = ModernoTable;
