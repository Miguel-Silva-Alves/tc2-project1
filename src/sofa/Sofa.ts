
// Definição da interface Sofa
interface Sofa {
  material: string;
  cor: string;
  altura: number;
  largura: number;
  exibirInfo(upperCase: boolean): String;
  calcVolume(): number;
  pintar(novaCor: string): String;
}