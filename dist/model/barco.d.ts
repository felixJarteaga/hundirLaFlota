import { Casilla } from "./Casilla";
import { Coordenada } from "./coordenada";
import { Sentido } from "./sentido";
export declare class Barco {
    private _size;
    private _posiciones;
    constructor(_size: number, inicial: Coordenada, direccion: Sentido);
    private crearBarco;
    private getCoordenadaBarco;
    get posiciones(): Casilla[];
}
