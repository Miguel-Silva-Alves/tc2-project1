interface Table {
    material: string;
    cor: string;
    altura: number;
    largura: number;
    hasGlass(): boolean;
    setColor(color: string): string;
}