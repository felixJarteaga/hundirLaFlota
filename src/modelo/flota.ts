//es la clase que contiene todo los barcos
import {Dimension} from "./dimension";
import {Barco} from "./barco";
import {GeneradorFlota} from "./generadorFlota";

export class Flota{
    private _almacenDeBarcos:Barco[]=[];
    private _fabricaDeBarcos:GeneradorFlota;
    constructor(private _dimensiones:Dimension) {
        this._fabricaDeBarcos=new GeneradorFlota(this._dimensiones);
        this.generarFlota();
    }
    private generarFlota(){
        let tamannosDeBarcos=[4,4,3,3,3,2,2,2,2];
        for (let i:number=0;i<tamannosDeBarcos.length;i++){
            this._almacenDeBarcos[i]=this._fabricaDeBarcos.crearBarco(tamannosDeBarcos[i]);
        }
    }


    get almacenDeBarcos(): Array<Barco> {
        return this._almacenDeBarcos;
    }

    set almacenDeBarcos(value: Array<Barco>) {
        this._almacenDeBarcos = value;
    }

    get fabricaDeBarcos(): GeneradorFlota {
        return this._fabricaDeBarcos;
    }

    set fabricaDeBarcos(value: GeneradorFlota) {
        this._fabricaDeBarcos = value;
    }

    get dimensiones(): Dimension {
        return this._dimensiones;
    }

    set dimensiones(value: Dimension) {
        this._dimensiones = value;
    }
}