import { ArteDecoSofa } from "./sofa/ArteDecoSofa.js";
import { ArteDecoChair } from "./chair/ArteDecoChair.js";
import { ArteDecoTable } from "./table/ArteDecoTable.js";
 
 // Fábricas Concretas
export class ArteDecoFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
      return new ArteDecoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa(): Sofa {
        return new ArteDecoSofa("Couro", "Branco", 100, 200); // Exemplo de criação de um sofá Art Deco
    }
    createTable(): Table {
      return new ArteDecoTable("Couro", "Branco", 100, 200);
    }
}
  