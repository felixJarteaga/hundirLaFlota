"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
var flota_1 = require("./flota");
var Tablero = /** @class */ (function () {
    function Tablero(dimension) {
        this._tablero = new Array();
        this._dimension = dimension;
        this._flota = new flota_1.Flota(this._dimension);
        this.generarTablero();
    }
    Tablero.prototype.generarTablero = function () {
        this.crearTablero();
        this.colocarBarcos();
    };
    Tablero.prototype.crearTablero = function () {
        for (var i = 0; i < this._dimension.alto; i++) {
            this._tablero[i] = new Array(this._dimension.ancho);
        }
    };
    Tablero.prototype.colocarBarcos = function () {
        console.log(this._flota.almacenDeBarcos);
        var almacenBarcos = this._flota.almacenDeBarcos;
        for (var i = 0; i < almacenBarcos.length; i++) {
            var casillas = almacenBarcos[i].posiciones;
            for (var j = 0; j < casillas.length; j++) {
                //let x:number=casillas[j].coordenada.x;
                //let y:number=casillas[j].coordenada.y;
                //console.log(x,y,j);
                this.tablero[this._flota.almacenDeBarcos[i].posiciones[j].coordenada.x][this._flota.almacenDeBarcos[i].posiciones[j].coordenada.y] = this._flota.almacenDeBarcos[i].posiciones[j];
            }
        }
    };
    Object.defineProperty(Tablero.prototype, "flota", {
        get: function () {
            return this._flota;
        },
        set: function (value) {
            this._flota = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "tablero", {
        get: function () {
            return this._tablero;
        },
        set: function (value) {
            this._tablero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "dimension", {
        get: function () {
            return this._dimension;
        },
        set: function (value) {
            this._dimension = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablero;
}());
exports.Tablero = Tablero;
//# sourceMappingURL=tablero.js.map