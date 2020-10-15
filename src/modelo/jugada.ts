import {Dimension} from "./dimension";
import {Tablero} from "./tablero";
import {Coordenada} from "./coordenada";

export class Jugada{

    private _dimensiones: Dimension = new Dimension(8, 12)
    private _tablero: Tablero = new Tablero(this._dimensiones);


    public play() {
        alert("Hundir la flota\n El juego tiene un tablero de 8*12 y 9 barcos repartido por el tablero\n de diferentes tamaños")
        console.log(this._tablero.tablero);
        do {
            alert(this._tablero.mostrarTablero())
            this._tablero.asignarEstadoCasilla(this.SolicitarCoordenadaActuacion())

        }while(!this._tablero.comprobarFlotaTotalHundida())
        alert("Victoria, has hundido la flota")
    }

    private SolicitarCoordenadaActuacion(): Coordenada {
        return new Coordenada(this.solicitarPuntoY(), this.solicitarPuntoX())
    }

    private solicitarPuntoX(): number {
        do {

            var X:any= prompt("Dame el punto en ele eje X")
            if (X == "") {
                X = 0;
            }else{

                X-=1
            }
        } while (!this.comprobarCoordenada(X, this._dimensiones.anchoD))
        return X

    }

    private solicitarPuntoY(): number {
        do {

            var Y: any = prompt("Dame el punto en ele eje Y")
            if (Y == "") {
                Y = 0;
            }else{

                Y-=1
            }
        } while (!this.comprobarCoordenada(Y, this._dimensiones.altoD))
        return Y
    }


    private comprobarCoordenada(punto: number, maximo: number): boolean {
        if (punto < maximo) {
            return true
        }
        return false;
    }

}