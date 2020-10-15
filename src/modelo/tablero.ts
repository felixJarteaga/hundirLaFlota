import {Flota} from "./flota";
import {Dimension} from "./dimension";
import {Estado} from "./estado";
import {Coordenada} from "./coordenada";

export class Tablero{
    private _flota:Flota;
    private _tablero:Array<any>=new Array<any>();
    private _dimension:Dimension;
    private _barcosHundidos:number=0;
    constructor( dimension:Dimension) {
        this._dimension=dimension;
        this._flota=new Flota(this._dimension);
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
                let x:number=casillas[j].coordenada.x;
                let y:number=casillas[j].coordenada.y;

                this.tablero[y][x]=this._flota.almacenDeBarcos[i].posiciones[j];


            }
        }
    }
    public mostrarTablero(): String {
        let tablero: String = "";
        tablero+="     "
        for (let j: number = 0; j < this._dimension.anchoD; j++) {
            tablero+=(j+1)+"  |  "
        }
        tablero+="\n"
        for (let i: number = 0; i < this._dimension.altoD; i++) {
            tablero += (i+1)+"  |   "
            for (let j: number = 0; j < this._dimension.anchoD; j++) {
                if (this.tablero[i][j] != undefined) {
                    tablero += this.pintarCasilla(this.tablero[i][j]);
                } else {
                    tablero += "X  |  "
                }
            }
            tablero += "\n"
        }

        return tablero
    }

    private pintarCasilla(arrayElementElement: any) {
        if (arrayElementElement == "W") {
            return "W  |  "
        }
        if (arrayElementElement.estado==Estado.indemne) {
            return "B  |  "
        } else if (arrayElementElement.estado == Estado.tocado ){
            return "T  |  "
        }else{
            return "H  |  "
        }
        return "";
    }
    public asignarEstadoCasilla(coordenada: Coordenada) {
        if (this.tablero[coordenada.x][coordenada.y]==undefined){
            alert("agua");
            this.tablero[coordenada.x][coordenada.y]="W";
        }else if(this.tablero[coordenada.x][coordenada.y].estado==Estado.indemne){
            alert("tocado");
            this.tablero[coordenada.x][coordenada.y].estado=Estado.tocado;
            this._barcosHundidos=this._flota.comprobarBarcoHundido(this._barcosHundidos);
        }

    }






    public comprobarFlotaTotalHundida():Boolean {
        if (this._barcosHundidos==this._flota.almacenDeBarcos.length){
            return true;
        }
        return false;
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