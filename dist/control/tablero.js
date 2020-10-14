"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
var flota_1 = require("../model/flota");
var estado_1 = require("../model/estado");
var Tablero = /** @class */ (function () {
    function Tablero(medidasTablero) {
        this._numeroBarcosHundidos = 0;
        this._tablero = new Array();
        this._medidasTablero = medidasTablero;
        this._flota = new flota_1.Flota(this._medidasTablero);
        this.generarTablero();
    }
    Tablero.prototype.generarTablero = function () {
        this.crearTablero();
        this.ColocarFlota();
    };
    Tablero.prototype.crearTablero = function () {
        for (var i = 0; i < this._medidasTablero.ancho; i++) {
            this._tablero[i] = new Array(this._medidasTablero.largo);
        }
    };
    Tablero.prototype.ColocarFlota = function () {
        for (var i = 0; i < this.getFlotaCompleta().length; i++) {
            for (var j = 0; j < this.getFlotaBarco(i).posiciones.length; j++) {
                this.insertarFlota(this.getFlotaBarco(i).posiciones[j].coordenada, this.getFlotaBarco(i).posiciones[j]);
            }
        }
    };
    Tablero.prototype.insertarFlota = function (coordenada, barco) {
        var X = coordenada.X;
        var Y = coordenada.Y;
        this._tablero[X][Y] = barco;
    };
    Tablero.prototype.hundidaTotaFlota = function () {
        return this.numeroBarcosHundidos == this._flota.flotaBarcos.length;
    };
    Tablero.prototype.mostrarTablero = function () {
        var tablero = "";
        tablero += "     ";
        for (var j = 0; j < this._medidasTablero.largo; j++) {
            tablero += (j + 1) + "  |  ";
        }
        tablero += "\n";
        for (var i = 0; i < this._medidasTablero.ancho; i++) {
            tablero += (i + 1) + "  |   ";
            for (var j = 0; j < this._medidasTablero.largo; j++) {
                if (this.tablero[i][j] != undefined) {
                    tablero += this.tratarCasillaMarcada(this.tablero[i][j]);
                }
                else {
                    tablero += "X  |  ";
                }
            }
            tablero += "\n";
        }
        return tablero;
    };
    Tablero.prototype.tratarCasillaMarcada = function (arrayElementElement) {
        if (arrayElementElement == "W") {
            return "W  |  ";
        }
        if (arrayElementElement.status == estado_1.Estado.INDEMNE) {
            return "X  |  ";
        }
        else if (arrayElementElement.status == estado_1.Estado.TOCADO) {
            return "T  |  ";
        }
        else {
            return "H  |  ";
        }
        return "";
    };
    Tablero.prototype.tratarCasilla = function (coordenada) {
        if (this.tablero[coordenada.X][coordenada.Y] == undefined) {
            this.tablero[coordenada.X][coordenada.Y] = "W";
            alert("Agua");
        }
        else if (this.tablero[coordenada.X][coordenada.Y].status == estado_1.Estado.INDEMNE) {
            this.tablero[coordenada.X][coordenada.Y].status = estado_1.Estado.TOCADO;
            alert("Tocado");
            // @ts-ignore
            this.numeroBarcosHundidos = this._flota.comprobarBarcoHundido(this._numeroBarcosHundidos);
        }
    };
    Object.defineProperty(Tablero.prototype, "tablero", {
        get: function () {
            return this._tablero;
        },
        enumerable: false,
        configurable: true
    });
    Tablero.prototype.getFlotaCompleta = function () {
        return this._flota.flotaBarcos;
    };
    Tablero.prototype.getFlotaBarco = function (i) {
        return this._flota.flotaBarcos[i];
    };
    Object.defineProperty(Tablero.prototype, "numeroBarcosHundidos", {
        get: function () {
            return this._numeroBarcosHundidos;
        },
        set: function (value) {
            this._numeroBarcosHundidos = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablero;
}());
exports.Tablero = Tablero;
//# sourceMappingURL=tablero.js.map