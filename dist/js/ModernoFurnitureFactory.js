"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernoFurnitureFactory = void 0;
const ModernoSofa_js_1 = require("./sofa/ModernoSofa.js");
const ModernoChair_js_1 = require("./chair/ModernoChair.js");
const ModernoTable_js_1 = require("./table/ModernoTable.js");
// Fábricas Concretas
class ModernoFurnitureFactory {
    createChair() {
        return new ModernoChair_js_1.ModernoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa() {
        return new ModernoSofa_js_1.ModernoSofa("Couro", "Branco", 100, 200); // Exemplo de criação de um sofá Art Deco
    }
    createTable() {
        return new ModernoTable_js_1.ModernoTable("Couro", "Branco", 100, 200);
    }
}
exports.ModernoFurnitureFactory = ModernoFurnitureFactory;
