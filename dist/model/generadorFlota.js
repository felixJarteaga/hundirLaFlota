"use strict";
//Generar una serie de barcos que no se solapan y que sortean la posicion incial de cada barco
// y el sentido en que crecen ademas el array de barcos creado asegura que ninguno se ha solapado necesita
// conocer la posicion maxima a la que puede desplegar un barco (maximo fila o columna)
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
var barco_1 = require("./barco");
var sentido_1 = require("./sentido");
var coordenada_1 = require("./coordenada");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota(_medida) {
        this._medida = _medida;
    }
    GeneradorFlota.prototype.dameNumeroEntreMaximoMinimo = function (min, max) {
        return Math.floor(Math.random() * (min - max) + max);
    };
    GeneradorFlota.prototype.dameSentidoAleatorio = function () {
        var sentido;
        (this.dameNumeroEntreMaximoMinimo(-1, 2) == 1) ? sentido = sentido_1.Sentido.DERECHA : sentido = sentido_1.Sentido.ABAJO;
        return sentido;
    };
    GeneradorFlota.prototype.crearBarco = function (tamanoBarco) {
        do {
            var sentidoBarco = this.dameSentidoAleatorio();
            var coordenadaIncial = this.coordenadaIncial();
        } while (this.salidaPorLimites(coordenadaIncial, tamanoBarco, sentidoBarco));
        var barco = new barco_1.Barco(tamanoBarco, coordenadaIncial, sentidoBarco);
        return barco;
    };
    GeneradorFlota.prototype.coordenadaIncial = function () {
        var puntoX = this.dameNumeroEntreMaximoMinimo(0, this._medida.ancho);
        var puntoY = this.dameNumeroEntreMaximoMinimo(0, this._medida.largo);
        return new coordenada_1.Coordenada(puntoX, puntoY);
    };
    GeneradorFlota.prototype.salidaPorLimites = function (coordenadaBarco, tamanoBarco, sentidoBarco) {
        var posicionTotalBarco;
        var saleDeLimites = false;
        if (sentidoBarco == sentido_1.Sentido.ABAJO) {
            posicionTotalBarco = tamanoBarco + coordenadaBarco.Y;
            if (posicionTotalBarco > this._medida.largo)
                saleDeLimites = true;
        }
        else {
            posicionTotalBarco = tamanoBarco + coordenadaBarco.X;
            if (posicionTotalBarco > this._medida.ancho)
                saleDeLimites = true;
        }
        return saleDeLimites;
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map