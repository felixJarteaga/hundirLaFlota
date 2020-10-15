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
    GeneradorFlota.prototype.dameCoordenadaInical = function (size, sentido) {
        do {
            var x = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.anchoD);
            var y = this.dameNumeroAleatorioEntreMaxMin(0, this._dimensiones.altoD);
            var coordenada = new coordenada_1.Coordenada(x, y);
        } while (!this.entraElBarcoEnLosLimites(size, coordenada, sentido));
        return coordenada;
    };
    GeneradorFlota.prototype.crearBarco = function (size, almacenDeBarcos) {
        do {
            var direccion = this.dameSentidoAleatorio();
            var inicial = this.dameCoordenadaInical(size, direccion);
            var barco = new barco_1.Barco(size, inicial, direccion);
        } while (this.exixteSolapamiento(barco, almacenDeBarcos));
        return barco;
    };
    GeneradorFlota.prototype.entraElBarcoEnLosLimites = function (size, coordenadaInicial, sentido) {
        var posMax = 0;
        var saleDeLosLImites = true;
        if (sentido == sentido_1.Sentido.abajo) {
            posMax = size + coordenadaInicial.y;
            if (posMax > this._dimensiones.altoD) {
                saleDeLosLImites = false;
            }
        }
        else {
            posMax = size + coordenadaInicial.x;
            if (posMax > this._dimensiones.anchoD) {
                saleDeLosLImites = false;
            }
        }
        return saleDeLosLImites;
    };
    GeneradorFlota.prototype.exixteSolapamiento = function (barco, almacenDeBarcos) {
        for (var i = 0; i < almacenDeBarcos.length; i++) {
            if (barco.compruebaSolapamiento(almacenDeBarcos[i].posiciones)) {
                return true;
            }
        }
        return false;
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map