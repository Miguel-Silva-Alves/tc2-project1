// Implementação da classe ArteDecoChair
export class ArteDecoChair implements Chair {
    material: string;
    cor: string;
    altura: number;
    largura: number;
    legs: number;
  
    constructor(material: string, cor: string, altura: number, largura: number, legs: number) {
      this.material = material;
      this.cor = cor;
      this.altura = altura;
      this.largura = largura;
      this.legs = legs;
    }
    hasLegs(): boolean {
        return this.legs > 0;
    }
    calculateArea(): number {
        return this.largura * this.largura * this.altura;
    }
  
    exibirInfo(upperCase: boolean): string {
        let info = `Chair ArteDeco - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
        return upperCase ? info.toUpperCase() : info;
      }

}