import { ModernoSofa } from "./sofa/ModernoSofa.js";
import { ModernoChair } from "./chair/ModernoChair.js";
import { ModernoTable } from "./table/ModernoTable.js";
 
 // Fábricas Concretas
export class ModernoFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
      return new ModernoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa(): Sofa {
        return new ModernoSofa("Couro", "Branco", 100, 200); // Exemplo de criação de um sofá Art Deco
    }
    createTable(): Table {
      return new ModernoTable("Couro", "Branco", 100, 200);
    }
}
  