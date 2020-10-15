import {Flota} from "./flota";
import {Dimension} from "./dimension";

export class Tablero{
    private _flota:Flota;
    private _tablero:Array<any>=new Array<any>();
    private _dimension:Dimension;
    constructor( dimension:Dimension) {
        this._dimension=dimension;
        this._flota=new Flota(this._dimension);
        this.generarTablero();

    }

    private generarTablero() {
        this.crearTablero();
        this.colocarBarcos()

    }

    private crearTablero(){
        for (let i:number=0; i<this._dimension.altoD; i++){
            this._tablero[i]= new Array(this._dimension.anchoD);

        }
    }
    private colocarBarcos(){
        console.log(this._flota.almacenDeBarcos);
        let almacenBarcos=this._flota.almacenDeBarcos;
        for (let i:number=0;i<almacenBarcos.length;i++){
            let casillas=almacenBarcos[i].posiciones;
            for (let j:number=0;j<casillas.length;j++){
                //let x:number=casillas[j].coordenada.x;
                //let y:number=casillas[j].coordenada.y;
                //console.log(x,y,j);
                this.tablero[this._flota.almacenDeBarcos[i].posiciones[j].coordenada.x][this._flota.almacenDeBarcos[i].posiciones[j].coordenada.y]=this._flota.almacenDeBarcos[i].posiciones[j];


            }
        }
    }

    get flota(): Flota {
        return this._flota;
    }

    set flota(value: Flota) {
        this._flota = value;
    }

    get tablero(): Array<any> {
        return this._tablero;
    }

    set tablero(value: Array<any>) {
        this._tablero = value;
    }

    get dimension(): Dimension {
        return this._dimension;
    }

    set dimension(value: Dimension) {
        this._dimension = value;
    }
}