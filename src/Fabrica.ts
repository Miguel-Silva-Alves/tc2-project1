// Fábrica Abstrata
interface FurnitureFactory {
    createChair(material: string, cor: string, altura: number, largura: number, legs: number): Chair;
    createSofa(material: string, cor: string, altura: number, largura: number): Sofa;
    createTable(material: string, cor: string, altura: number, largura: number): Table;
}