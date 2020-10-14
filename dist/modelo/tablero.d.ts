import { Flota } from "./flota";
import { Dimension } from "./dimension";
export declare class Tablero {
    private _flota;
    private _tablero;
    private _dimension;
    constructor(dimension: Dimension);
    private generarTablero;
    private crearTablero;
    private colocarBarcos;
    get flota(): Flota;
    set flota(value: Flota);
    get tablero(): Array<any>;
    set tablero(value: Array<any>);
    get dimension(): Dimension;
    set dimension(value: Dimension);
}
