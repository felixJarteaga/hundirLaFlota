import { Flota } from "./flota";
import { Dimension } from "./dimension";
import { Coordenada } from "./coordenada";
export declare class Tablero {
    private _flota;
    private _tablero;
    private _dimension;
    private _barcosHundidos;
    constructor(dimension: Dimension);
    private crearTablero;
    private colocarBarcos;
    mostrarTablero(): String;
    private pintarCasilla;
    asignarEstadoCasilla(coordenada: Coordenada): void;
    comprobarFlotaTotalHundida(): Boolean;
    get flota(): Flota;
    set flota(value: Flota);
    get tablero(): Array<any>;
    set tablero(value: Array<any>);
    get dimension(): Dimension;
    set dimension(value: Dimension);
}
