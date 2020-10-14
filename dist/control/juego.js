"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var dimensiones_1 = require("../model/dimensiones");
var coordenada_1 = require("../model/coordenada");
var tablero_1 = require("./tablero");
var Juego = /** @class */ (function () {
    function Juego() {
        this._medidasTablero = new dimensiones_1.Dimensiones(8, 12);
        this._tablero = new tablero_1.Tablero(this._medidasTablero);
    }
    Juego.prototype.play = function () {
        alert("Vienvenido al  Hundir la FLota el juego se desarrolla\n en un tablero de 8x12 y contamos con \n 2 barcos de 4 casillas 3 barcos de 3 casillas y 4 barcos de 2 casillas\n espero que lo disfrutes");
        do {
            alert(this._tablero.mostrarTablero());
            this._tablero.tratarCasilla(this.SolicitarCoordenadaActuacion());
        } while (!this._tablero.hundidaTotaFlota());
        alert("Enhorabuena has ganado y seguro que habra muerto mucha gente eran cruceros por el mediterraneo");
    };
    Juego.prototype.SolicitarCoordenadaActuacion = function () {
        return new coordenada_1.Coordenada(this.solicitarPuntoX(), this.solicitarPuntoY());
    };
    Juego.prototype.solicitarPuntoX = function () {
        do {
            var X = prompt("Dame el punto en ele eje X");
            if (X == null) {
                X = 0;
            }
        } while (!this.comprobarCoordenada(X, this._medidasTablero.ancho));
        return X - 1;
    };
    Juego.prototype.solicitarPuntoY = function () {
        do {
            var Y = prompt("Dame el punto en ele eje Y");
            if (Y == null) {
                Y = 0;
            }
        } while (!this.comprobarCoordenada(Y, this._medidasTablero.largo));
        return Y - 1;
    };
    Juego.prototype.comprobarCoordenada = function (punto, maximo) {
        if (punto < maximo) {
            return true;
        }
        return false;
    };
    return Juego;
}());
exports.Juego = Juego;
//# sourceMappingURL=juego.js.map