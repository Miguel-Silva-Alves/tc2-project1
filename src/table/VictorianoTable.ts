// Implementação da classe Victoriano
export class VictorianoTable implements Table {
    material: string;
    cor: string;
    altura: number;
    largura: number;
  
    constructor(material: string, cor: string, altura: number, largura: number) {
      this.material = material;
      this.cor = cor;
      this.altura = altura;
      this.largura = largura;
    }
    hasGlass(): boolean {
        return this.material.toLowerCase().includes('glass')
    }
    setColor(color: string): string {
        this.cor = color;
        return this.cor;
    }

    exibirInfo(upperCase: boolean): string {
        let info = `Table Victoriano - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
        return upperCase ? info.toUpperCase() : info;
    }

}