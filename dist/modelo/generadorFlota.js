"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
var sentido_1 = require("./sentido");
var coordenada_1 = require("./coordenada");
var barco_1 = require("./barco");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota(_dimensiones) {
        this._dimensiones = _dimensiones;
    }
    GeneradorFlota.prototype.dameNumeroAleatorioEntreMaxMin = function (minimo, maximo) {
        return Math.floor(Math.random() * (minimo - maximo) + maximo);
    };
    GeneradorFlota.prototype.dameSentidoAleatorio = function () {
        if (this.dameNumeroAleatorioEntreMaxMin(-1, 2) == 1) {
            return sentido_1.Sentido.derecha;
        }
        return sentido_1.Sentido.abajo;
    };
    GeneradorFlota.prototype.dameCoordenadaInical = function () {
        var x = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.alto);
        var y = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.ancho);
        return new coordenada_1.Coordenada(x, y);
    };
    GeneradorFlota.prototype.crearBarco = function (size) {
        do {
            var inicial = this.dameCoordenadaInical();
            var direccion = this.dameSentidoAleatorio();
        } while (!this.entraElBarcoEnLosLimites(size, inicial, direccion));
        return new barco_1.Barco(size, inicial, direccion);
    };
    GeneradorFlota.prototype.entraElBarcoEnLosLimites = function (size, coordenadaInicial, sentido) {
        var posMax = 0;
        var saleDeLosLImites = true;
        if (sentido == sentido_1.Sentido.abajo) {
            posMax = size + coordenadaInicial.y;
            if (posMax > this._dimensiones.alto) {
                saleDeLosLImites = false;
            }
        }
        else {
            posMax = size + coordenadaInicial.x;
            if (posMax > this._dimensiones.ancho) {
                saleDeLosLImites = false;
            }
        }
        return saleDeLosLImites;
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map