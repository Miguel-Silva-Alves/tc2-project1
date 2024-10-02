import { VictorianoSofa } from "./sofa/VictorianoSofa.js";
import { VictorianoChair } from "./chair/VictorianoChair.js";
import { VictorianoTable } from "./table/VictorianoTable.js";
 
 // Fábricas Concretas
export class VictorianoFurnitureFactory implements FurnitureFactory {
  createChair(material: string, cor: string, altura: number, largura: number, legs: number): Chair {
    return new VictorianoChair(material, cor, altura, largura, legs);
  }
  createSofa(material: string, cor: string, altura: number, largura: number): Sofa {
      return new VictorianoSofa(material, cor, altura, largura);
  }
  createTable(material: string, cor: string, altura: number, largura: number): Table {
    return new VictorianoTable(material, cor, altura, largura);
  }
}
  