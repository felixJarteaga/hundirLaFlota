import { Dimension } from "./dimension";
import { Barco } from "./barco";
import { GeneradorFlota } from "./generadorFlota";
export declare class Flota {
    private _dimensiones;
    private _almacenDeBarcos;
    private _fabricaDeBarcos;
    constructor(_dimensiones: Dimension);
    private generarFlota;
    get almacenDeBarcos(): Array<Barco>;
    set almacenDeBarcos(value: Array<Barco>);
    get fabricaDeBarcos(): GeneradorFlota;
    set fabricaDeBarcos(value: GeneradorFlota);
    get dimensiones(): Dimension;
    set dimensiones(value: Dimension);
}
