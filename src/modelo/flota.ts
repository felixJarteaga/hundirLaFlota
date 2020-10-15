//es la clase que contiene todo los barcos
import {Dimension} from "./dimension";
import {Barco} from "./barco";
import {GeneradorFlota} from "./generadorFlota";
import {Estado} from "./estado";

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
            this._almacenDeBarcos[i]=this._fabricaDeBarcos.crearBarco(tamannosDeBarcos[i],this._almacenDeBarcos);
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

    public comprobarBarcoHundido(_barcosHundidos: number) {
        let barcosTocados=0;
        for (let i:number=0;i<this.almacenDeBarcos.length;i++){
            barcosTocados=0;
            for (let j:number=0;j<this.almacenDeBarcos[i].posiciones.length;j++){
                if (this.almacenDeBarcos[i].posiciones[j].estado==Estado.tocado){
                    barcosTocados++;
                    if (barcosTocados==this.almacenDeBarcos[i].posiciones.length){
                        alert("Hundido");
                        this.hundirBarco(this.almacenDeBarcos[i])
                        _barcosHundidos++;
                    }
                }
            }
        }
        return _barcosHundidos;
    }

    private hundirBarco(barco: Barco) {
        for (let i:number=0;i<barco.posiciones.length;i++){
            barco.posiciones[i].estado=Estado.hundido;
        }
    }
}