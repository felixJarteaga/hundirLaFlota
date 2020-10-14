import { Sentido } from "./sentido";
export declare class Coordenada {
    private _x;
    private _y;
    constructor(_x: number, _y: number);
    get X(): number;
    get Y(): number;
    set X(xv: number);
    set Y(yv: number);
    equals(coordenada: Coordenada): boolean;
    mover(sentido: Sentido): void;
    bajar(): void;
    avanzar(): void;
}
