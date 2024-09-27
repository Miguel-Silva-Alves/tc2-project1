"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernoChair = void 0;
// Implementação da classe Moderno
class ModernoChair {
    constructor(material, cor, altura, largura, legs) {
        this.material = material;
        this.cor = cor;
        this.altura = altura;
        this.largura = largura;
        this.legs = legs;
    }
    hasLegs() {
        return this.legs > 0;
    }
    calculateArea() {
        return this.largura * this.largura * this.altura;
    }
    exibirInfo(upperCase) {
        let info = `Chair Moderno - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
        return upperCase ? info.toUpperCase() : info;
    }
}
exports.ModernoChair = ModernoChair;
