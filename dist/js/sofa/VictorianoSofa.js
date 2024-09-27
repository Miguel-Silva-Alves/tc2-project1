"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VictorianoSofa = void 0;
// Implementação da classe Victoriano
class VictorianoSofa {
    constructor(material, cor, altura, largura) {
        this.material = material;
        this.cor = cor;
        this.altura = altura;
        this.largura = largura;
    }
    exibirInfo(upperCase) {
        let info = `Sofá Victoriano - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
        return upperCase ? info.toUpperCase() : info;
    }
    calcVolume() {
        return this.altura * this.largura;
    }
    pintar(novaCor) {
        this.cor = novaCor;
        return this.exibirInfo(false);
    }
}
exports.VictorianoSofa = VictorianoSofa;
