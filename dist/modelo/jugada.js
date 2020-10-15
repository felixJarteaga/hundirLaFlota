"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugada = void 0;
var dimension_1 = require("./dimension");
var tablero_1 = require("./tablero");
var coordenada_1 = require("./coordenada");
var Jugada = /** @class */ (function () {
    function Jugada() {
        this._dimensiones = new dimension_1.Dimension(8, 12);
        this._tablero = new tablero_1.Tablero(this._dimensiones);
    }
    Jugada.prototype.play = function () {
        alert("Hundir la flota\n El juego tiene un tablero de 8*12 y 9 barcos repartido por el tablero\n de diferentes tamaños");
        console.log(this._tablero.tablero);
        do {
            alert(this._tablero.mostrarTablero());
            this._tablero.asignarEstadoCasilla(this.SolicitarCoordenadaActuacion());
        } while (!this._tablero.comprobarFlotaTotalHundida());
        alert("Victoria, has hundido la flota");
    };
    Jugada.prototype.SolicitarCoordenadaActuacion = function () {
        return new coordenada_1.Coordenada(this.solicitarPuntoY(), this.solicitarPuntoX());
    };
    Jugada.prototype.solicitarPuntoX = function () {
        do {
            var X = prompt("Dame el punto en ele eje X");
            if (X == "") {
                X = 0;
            }
            else {
                X -= 1;
            }
        } while (!this.comprobarCoordenada(X, this._dimensiones.anchoD));
        return X;
    };
    Jugada.prototype.solicitarPuntoY = function () {
        do {
            var Y = prompt("Dame el punto en ele eje Y");
            if (Y == "") {
                Y = 0;
            }
            else {
                Y -= 1;
            }
        } while (!this.comprobarCoordenada(Y, this._dimensiones.altoD));
        return Y;
    };
    Jugada.prototype.comprobarCoordenada = function (punto, maximo) {
        if (punto < maximo) {
            return true;
        }
        return false;
    };
    return Jugada;
}());
exports.Jugada = Jugada;
//# sourceMappingURL=jugada.js.map