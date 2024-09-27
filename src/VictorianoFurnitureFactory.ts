import { VictorianoSofa } from "./sofa/VictorianoSofa.js";
import { VictorianoChair } from "./chair/VictorianoChair.js";
import { VictorianoTable } from "./table/VictorianoTable.js";
 
 // Fábricas Concretas
export class VictorianoFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
      return new VictorianoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa(): Sofa {
        return new VictorianoSofa("Couro", "Branco", 100, 200);
    }
    createTable(): Table {
      return new VictorianoTable("Couro", "Branco", 100, 200);
    }
}
  