import { ModernoSofa } from "./sofa/ModernoSofa.js";
import { ModernoChair } from "./chair/ModernoChair.js";
import { ModernoTable } from "./table/ModernoTable.js";
 
 // Fábricas Concretas
export class ModernoFurnitureFactory implements FurnitureFactory {
    createChair(material: string, cor: string, altura: number, largura: number, legs: number): Chair {
      return new ModernoChair(material, cor, altura, largura, legs);
    }
    createSofa(material: string, cor: string, altura: number, largura: number): Sofa {
        return new ModernoSofa(material, cor, altura, largura);
    }
    createTable(material: string, cor: string, altura: number, largura: number): Table {
      return new ModernoTable(material, cor, altura, largura);
    }
}
  