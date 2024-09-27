
import { Cliente } from "./Cliente.js";
import { ModernoSofa } from "./sofa/ModernoSofa.js";
import { ArteDecoSofa } from "./sofa/ArteDecoSofa.js";
import { VictorianoSofa } from "./sofa/VictorianoSofa.js";
import { ArteDecoFurnitureFactory } from "./ArteDecoFurnitureFactory.js"
import { ModernoFurnitureFactory } from "./ModernoFurnitureFactory.js"
import { VictorianoFurnitureFactory } from "./VictorianoFurnitureFactory.js"

// Clientes
const cliente1 = new Cliente(1, "miguel");
const cliente2 = new Cliente(2, "julia");

// Sofa
const sofaModerno = new ModernoSofa('couro', 'preto', 1.0, 2.0);
console.log(sofaModerno.exibirInfo(true)); // Exibe informações do sofá moderno
console.log(`Volume: ${sofaModerno.calcVolume()}m`); // Calcula o volume do sofá
sofaModerno.pintar('vermelho');

const sofaArteDeco = new ArteDecoSofa('tecido', 'azul', 1.2, 2.2);
console.log(sofaArteDeco.exibirInfo(false));
sofaArteDeco.pintar('verde');
console.log(`Volume: ${sofaArteDeco.calcVolume()}m`);

const sofaVictoriano = new VictorianoSofa('veludo', 'marrom', 1.5, 2.5);
console.log(sofaVictoriano.exibirInfo(true));

 // Simulação
function simulateFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const Table = factory.createTable();

    console.log(chair.hasLegs());
    console.log(sofa.calcVolume());
    console.log(Table.hasGlass());
}

// Testando com a fábrica Arte Deco
simulateFurniture(new ArteDecoFurnitureFactory());

// Testando com a fábrica Vitoriano
simulateFurniture(new VictorianoFurnitureFactory());

// Testando com a fábrica Moderno
simulateFurniture(new ModernoFurnitureFactory());
