import { Dimension } from "./dimension";
import { Barco } from "./barco";
export declare class GeneradorFlota {
    private _dimensiones;
    constructor(_dimensiones: Dimension);
    private dameNumeroAleatorioEntreMaxMin;
    private dameSentidoAleatorio;
    private dameCoordenadaInical;
    crearBarco(size: number, almacenDeBarcos: Array<Barco>): Barco;
    private entraElBarcoEnLosLimites;
    private exixteSolapamiento;
}
