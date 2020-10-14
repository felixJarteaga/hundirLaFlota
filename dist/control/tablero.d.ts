import { Dimensiones } from "../model/dimensiones";
import { Coordenada } from "../model/coordenada";
export declare class Tablero {
    private _numeroBarcosHundidos;
    private _medidasTablero;
    private _flota;
    private _tablero;
    constructor(medidasTablero: Dimensiones);
    private generarTablero;
    private crearTablero;
    private ColocarFlota;
    private insertarFlota;
    hundidaTotaFlota(): boolean;
    mostrarTablero(): String;
    private tratarCasillaMarcada;
    tratarCasilla(coordenada: Coordenada): void;
    get tablero(): Array<any>;
    private getFlotaCompleta;
    private getFlotaBarco;
    get numeroBarcosHundidos(): number;
    set numeroBarcosHundidos(value: number);
}
