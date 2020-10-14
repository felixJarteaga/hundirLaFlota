import { Barco } from "./barco";
import { Dimensiones } from "./dimensiones";
export declare class Flota {
    private _medidas;
    private _generadorFlota;
    private _flotaBarcos;
    constructor(_medidas: Dimensiones);
    private generarFlotas;
    comprobarBarcoHundido(numeroBarcosHundidos: number): Number;
    private getLengthFlotaBarcos;
    private getPosicionBarco;
    private hundirBarco;
    private getCasillas;
    get flotaBarcos(): Barco[];
}
