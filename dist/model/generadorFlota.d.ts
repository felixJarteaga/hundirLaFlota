import { Dimensiones } from "./dimensiones";
import { Barco } from "./barco";
export declare class GeneradorFlota {
    private _medida;
    constructor(_medida: Dimensiones);
    private dameNumeroEntreMaximoMinimo;
    private dameSentidoAleatorio;
    crearBarco(tamanoBarco: number): Barco;
    private coordenadaIncial;
    private salidaPorLimites;
}
