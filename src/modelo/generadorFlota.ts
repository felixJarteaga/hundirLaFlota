// generar una serie de barcos que no se solapan
//y que sortean la posicion inicial de cada barco
//y el sentido en que creccen.
//Ademas el array de barcos creados asegura que ninguno  se ha solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(maximo fila o columna) aleatorio de  0 hasta 12-longitud de barco.
import {Dimension} from "./dimension";
import {Sentido} from "./sentido";
import {Coordenada} from "./coordenada";
import {Barco} from "./barco";

export class GeneradorFlota {
    constructor(private _dimensiones: Dimension) {
    }

    private dameNumeroAleatorioEntreMaxMin(minimo: number, maximo: number): number {
        return Math.floor(Math.random() * (minimo - maximo) + maximo);
    }

    private dameSentidoAleatorio(): Sentido {

        if (this.dameNumeroAleatorioEntreMaxMin(-1, 2) == 1) {
            return Sentido.derecha
        }
        return Sentido.abajo;

    }

    private dameCoordenadaInical(): Coordenada {
        let x = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.altoD)
        let y = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.anchoD)
        return new Coordenada(x, y);
    }

    public crearBarco(size: number): Barco {
        do {
            var inicial = this.dameCoordenadaInical();
            var direccion = this.dameSentidoAleatorio();
        } while (!this.entraElBarcoEnLosLimites(size, inicial, direccion))
        return new Barco(size, inicial, direccion);
    }

    private entraElBarcoEnLosLimites(size: number, coordenadaInicial: Coordenada, sentido: Sentido): boolean {
        let posMax: number = 0;
        let saleDeLosLImites: boolean = true;
        if (sentido == Sentido.abajo) {
            posMax = size + coordenadaInicial.y;

            if (posMax > this._dimensiones.altoD) {
                saleDeLosLImites = false;
            }
        } else {
            posMax = size + coordenadaInicial.x;
            if (posMax > this._dimensiones.anchoD) {
                saleDeLosLImites = false;
            }
        }
        return saleDeLosLImites;


    }
}