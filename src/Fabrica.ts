// Fábrica Abstrata
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createTable(): Table;
}