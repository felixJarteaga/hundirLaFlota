"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
var generadorFlota_1 = require("./generadorFlota");
var estado_1 = require("./estado");
var Flota = /** @class */ (function () {
    function Flota(_medidas) {
        this._medidas = _medidas;
        this._flotaBarcos = [];
        this._generadorFlota = new generadorFlota_1.GeneradorFlota(this._medidas);
        this.generarFlotas();
    }
    Flota.prototype.generarFlotas = function () {
        var barcos = [4, 4, 3, 3, 3, 2, 2, 2, 2];
        for (var i = 0; i < barcos.length; i++) {
            var barco = this._generadorFlota.crearBarco(barcos[i]);
            this._flotaBarcos[i] = barco;
        }
    };
    Flota.prototype.comprobarBarcoHundido = function (numeroBarcosHundidos) {
        var barcosTocados;
        for (var i = 0; i < this._flotaBarcos.length; i++) {
            barcosTocados = 0;
            for (var j = 0; j < this.getLengthFlotaBarcos(i); j++) {
                if (this.getPosicionBarco(i, j).status == estado_1.Estado.TOCADO) {
                    barcosTocados++;
                }
                if (barcosTocados == this.getLengthFlotaBarcos(i)) {
                    alert("Hundido");
                    this.hundirBarco(this._flotaBarcos[i]);
                    numeroBarcosHundidos++;
                }
            }
        }
        return numeroBarcosHundidos;
    };
    Flota.prototype.getLengthFlotaBarcos = function (i) {
        return this._flotaBarcos[i].posiciones.length;
    };
    Flota.prototype.getPosicionBarco = function (i, j) {
        return this._flotaBarcos[i].posiciones[j];
    };
    Flota.prototype.hundirBarco = function (barco) {
        for (var i = 0; i < this.getCasillas(barco).length; i++) {
            this.getCasillas(barco)[i].status = estado_1.Estado.HUNDIDO;
        }
    };
    Flota.prototype.getCasillas = function (barco) {
        return barco.posiciones;
    };
    Object.defineProperty(Flota.prototype, "flotaBarcos", {
        get: function () {
            return this._flotaBarcos;
        },
        enumerable: false,
        configurable: true
    });
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map