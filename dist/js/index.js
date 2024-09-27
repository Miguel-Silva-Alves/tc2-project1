"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_js_1 = require("./Cliente.js");
const Moderno_js_1 = require("./sofa/Moderno.js");
const ArteDeco_js_1 = require("./sofa/ArteDeco.js");
const Victoriano_js_1 = require("./sofa/Victoriano.js");
// Clientes
const cliente1 = new Cliente_js_1.Cliente(1, "miguel");
const cliente2 = new Cliente_js_1.Cliente(2, "julia");
// Sofa
const sofaModerno = new Moderno_js_1.Moderno('couro', 'preto', 1.0, 2.0);
console.log(sofaModerno.exibirInfo(true)); // Exibe informações do sofá moderno
console.log(`Volume: ${sofaModerno.calcVolume()}m`); // Calcula o volume do sofá
sofaModerno.pintar('vermelho');
const sofaArteDeco = new ArteDeco_js_1.ArteDeco('tecido', 'azul', 1.2, 2.2);
console.log(sofaArteDeco.exibirInfo(false));
sofaArteDeco.pintar('verde');
console.log(`Volume: ${sofaArteDeco.calcVolume()}m`);
const sofaVictoriano = new Victoriano_js_1.Victoriano('veludo', 'marrom', 1.5, 2.5);
console.log(sofaVictoriano.exibirInfo(true));
