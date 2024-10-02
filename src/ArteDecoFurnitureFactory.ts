import { ArteDecoSofa } from "./sofa/ArteDecoSofa.js";
import { ArteDecoChair } from "./chair/ArteDecoChair.js";
import { ArteDecoTable } from "./table/ArteDecoTable.js";
 
 // Fábricas Concretas
export class ArteDecoFurnitureFactory implements FurnitureFactory {
    createChair(material: string, cor: string, altura: number, largura: number, legs: number): Chair {
      return new ArteDecoChair(material, cor, altura, largura, legs);
    }
    createSofa(material: string, cor: string, altura: number, largura: number): Sofa {
        return new ArteDecoSofa(material, cor, altura, largura);
    }
    createTable(material: string, cor: string, altura: number, largura: number): Table {
      return new ArteDecoTable(material, cor, altura, largura);
    }
}
  