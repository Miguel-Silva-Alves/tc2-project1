"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_js_1 = require("./Cliente.js");
const ModernoSofa_js_1 = require("./sofa/ModernoSofa.js");
const ArteDecoSofa_js_1 = require("./sofa/ArteDecoSofa.js");
const VictorianoSofa_js_1 = require("./sofa/VictorianoSofa.js");
const ArteDecoFurnitureFactory_js_1 = require("./ArteDecoFurnitureFactory.js");
const ModernoFurnitureFactory_js_1 = require("./ModernoFurnitureFactory.js");
const VictorianoFurnitureFactory_js_1 = require("./VictorianoFurnitureFactory.js");
// Clientes
const cliente1 = new Cliente_js_1.Cliente(1, "miguel");
const cliente2 = new Cliente_js_1.Cliente(2, "julia");
// Sofa
const sofaModerno = new ModernoSofa_js_1.ModernoSofa('couro', 'preto', 1.0, 2.0);
console.log(sofaModerno.exibirInfo(true)); // Exibe informações do sofá moderno
console.log(`Volume: ${sofaModerno.calcVolume()}m`); // Calcula o volume do sofá
sofaModerno.pintar('vermelho');
const sofaArteDeco = new ArteDecoSofa_js_1.ArteDecoSofa('tecido', 'azul', 1.2, 2.2);
console.log(sofaArteDeco.exibirInfo(false));
sofaArteDeco.pintar('verde');
console.log(`Volume: ${sofaArteDeco.calcVolume()}m`);
const sofaVictoriano = new VictorianoSofa_js_1.VictorianoSofa('veludo', 'marrom', 1.5, 2.5);
console.log(sofaVictoriano.exibirInfo(true));
// Simulação
function simulateFurniture(factory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const Table = factory.createTable();
    console.log(chair.hasLegs());
    console.log(sofa.calcVolume());
    console.log(Table.hasGlass());
}
// Testando com a fábrica Arte Deco
simulateFurniture(new ArteDecoFurnitureFactory_js_1.ArteDecoFurnitureFactory());
// Testando com a fábrica Vitoriano
simulateFurniture(new VictorianoFurnitureFactory_js_1.VictorianoFurnitureFactory());
// Testando com a fábrica Moderno
simulateFurniture(new ModernoFurnitureFactory_js_1.ModernoFurnitureFactory());
