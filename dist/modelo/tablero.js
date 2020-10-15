"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
var flota_1 = require("./flota");
var estado_1 = require("./estado");
var Tablero = /** @class */ (function () {
    function Tablero(dimension) {
        this._tablero = new Array();
        this._barcosHundidos = 0;
        this._dimension = dimension;
        this._flota = new flota_1.Flota(this._dimension);
        this.crearTablero();
        this.colocarBarcos();
    }
    Tablero.prototype.crearTablero = function () {
        for (var i = 0; i < this._dimension.altoD; i++) {
            this._tablero[i] = new Array(this._dimension.anchoD);
        }
    };
    Tablero.prototype.colocarBarcos = function () {
        console.log(this._flota.almacenDeBarcos);
        var almacenBarcos = this._flota.almacenDeBarcos;
        for (var i = 0; i < almacenBarcos.length; i++) {
            var casillas = almacenBarcos[i].posiciones;
            for (var j = 0; j < casillas.length; j++) {
                var x = casillas[j].coordenada.x;
                var y = casillas[j].coordenada.y;
                this.tablero[y][x] = this._flota.almacenDeBarcos[i].posiciones[j];
            }
        }
    };
    Tablero.prototype.mostrarTablero = function () {
        var tablero = "";
        tablero += "     ";
        for (var j = 0; j < this._dimension.anchoD; j++) {
            tablero += (j + 1) + "  |  ";
        }
        tablero += "\n";
        for (var i = 0; i < this._dimension.altoD; i++) {
            tablero += (i + 1) + "  |   ";
            for (var j = 0; j < this._dimension.anchoD; j++) {
                if (this.tablero[i][j] != undefined) {
                    tablero += this.pintarCasilla(this.tablero[i][j]);
                }
                else {
                    tablero += "X  |  ";
                }
            }
            tablero += "\n";
        }
        return tablero;
    };
    Tablero.prototype.pintarCasilla = function (arrayElementElement) {
        if (arrayElementElement == "W") {
            return "W  |  ";
        }
        if (arrayElementElement.estado == estado_1.Estado.indemne) {
            return "B  |  ";
        }
        else if (arrayElementElement.estado == estado_1.Estado.tocado) {
            return "T  |  ";
        }
        else {
            return "H  |  ";
        }
        return "";
    };
    Tablero.prototype.asignarEstadoCasilla = function (coordenada) {
        if (this.tablero[coordenada.x][coordenada.y] == undefined) {
            alert("agua");
            this.tablero[coordenada.x][coordenada.y] = "W";
        }
        else if (this.tablero[coordenada.x][coordenada.y].estado == estado_1.Estado.indemne) {
            alert("tocado");
            this.tablero[coordenada.x][coordenada.y].estado = estado_1.Estado.tocado;
            this._barcosHundidos = this._flota.comprobarBarcoHundido(this._barcosHundidos);
        }
    };
    Tablero.prototype.comprobarFlotaTotalHundida = function () {
        if (this._barcosHundidos == this._flota.almacenDeBarcos.length) {
            return true;
        }
        return false;
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