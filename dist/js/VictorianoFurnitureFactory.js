"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VictorianoFurnitureFactory = void 0;
const VictorianoSofa_js_1 = require("./sofa/VictorianoSofa.js");
const VictorianoChair_js_1 = require("./chair/VictorianoChair.js");
const VictorianoTable_js_1 = require("./table/VictorianoTable.js");
// Fábricas Concretas
class VictorianoFurnitureFactory {
    createChair() {
        return new VictorianoChair_js_1.VictorianoChair("Couro", "Branco", 100, 200, 4);
    }
    createSofa() {
        return new VictorianoSofa_js_1.VictorianoSofa("Couro", "Branco", 100, 200);
    }
    createTable() {
        return new VictorianoTable_js_1.VictorianoTable("Couro", "Branco", 100, 200);
    }
}
exports.VictorianoFurnitureFactory = VictorianoFurnitureFactory;
