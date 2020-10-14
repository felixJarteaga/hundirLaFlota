import { Coordenada } from "./coordenada";
import { Estado } from "./estado";
export declare class Casilla {
    private _status;
    private _coordenada;
    constructor(_status: Estado, _coordenada: Coordenada);
    get status(): Estado;
    set status(value: Estado);
    get coordenada(): Coordenada;
    set coordenada(value: Coordenada);
}
