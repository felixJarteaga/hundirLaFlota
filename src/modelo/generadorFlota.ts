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

    private dameCoordenadaInical(size: number, sentido: Sentido): Coordenada {
        do {
            let x = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.anchoD)
            let y = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.altoD)
            var coordenada= new Coordenada(x, y);
        }while(!this.entraElBarcoEnLosLimites(size, coordenada, sentido));
        return coordenada;


    }

    public crearBarco(size: number,almacenDeBarcos: Array<Barco>): Barco {
        do {
            var direccion = this.dameSentidoAleatorio();
            var inicial = this.dameCoordenadaInical(size,direccion);
            var barco=new Barco(size, inicial, direccion);
        } while (this.exixteSolapamiento(barco,almacenDeBarcos))
        return barco;
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
    private exixteSolapamiento(barco:Barco,almacenDeBarcos: Array<Barco>):Boolean{
        for (let i:number=0;i<almacenDeBarcos.length;i++){
            if (barco.compruebaSolapamiento(almacenDeBarcos[i].posiciones)){
                return true;
            }
        }
        return false;
    }
}