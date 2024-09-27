
import { Cliente } from "./Cliente.js";
import { Moderno } from "./sofa/Moderno.js";
import { ArteDeco } from "./sofa/ArteDeco.js";
import { Victoriano } from "./sofa/Victoriano.js";

// Clientes
const cliente1 = new Cliente(1, "miguel");
const cliente2 = new Cliente(2, "julia");

// Sofa
const sofaModerno = new Moderno('couro', 'preto', 1.0, 2.0);
console.log(sofaModerno.exibirInfo(true)); // Exibe informações do sofá moderno
console.log(`Volume: ${sofaModerno.calcVolume()}m`); // Calcula o volume do sofá
sofaModerno.pintar('vermelho');

const sofaArteDeco = new ArteDeco('tecido', 'azul', 1.2, 2.2);
console.log(sofaArteDeco.exibirInfo(false));
sofaArteDeco.pintar('verde');
console.log(`Volume: ${sofaArteDeco.calcVolume()}m`);

const sofaVictoriano = new Victoriano('veludo', 'marrom', 1.5, 2.5);
console.log(sofaVictoriano.exibirInfo(true));