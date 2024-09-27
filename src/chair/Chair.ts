interface Chair {
    material: string;
    cor: string;
    altura: number;
    largura: number;
    legs: number;
    hasLegs(): boolean;
    calculateArea(): number;
}