// Implementação da classe Moderno
export class ModernoSofa implements Sofa {
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
  
    exibirInfo(upperCase: boolean): string {
      let info = `Sofá Moderno - Material: ${this.material}, Cor: ${this.cor}, Altura: ${this.altura}, Largura: ${this.largura}`;
      return upperCase ? info.toUpperCase() : info;
    }
  
    calcVolume(): number {
      return this.altura * this.largura;
    }
  
    pintar(novaCor: string): String {
      this.cor = novaCor;
      return this.exibirInfo(false);
    }
  }