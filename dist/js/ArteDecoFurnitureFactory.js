"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArteDecoFurnitureFactory = void 0;
const ArteDecoSofa_js_1 = require("./sofa/ArteDecoSofa.js");
const ArteDecoChair_js_1 = require("./chair/ArteDecoChair.js");
const ArteDecoTable_js_1 = require("./table/ArteDecoTable.js");
// Fábricas Concretas
class ArteDecoFurnitureFactory {
    createChair() {
        return new ArteDecoChair_js_1.ArteDecoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa() {
        return new ArteDecoSofa_js_1.ArteDecoSofa("Couro", "Branco", 100, 200); // Exemplo de criação de um sofá Art Deco
    }
    createTable() {
        return new ArteDecoTable_js_1.ArteDecoTable("Couro", "Branco", 100, 200);
    }
}
exports.ArteDecoFurnitureFactory = ArteDecoFurnitureFactory;
