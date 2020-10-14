"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barco = void 0;
var Casilla_1 = require("./Casilla");
var coordenada_1 = require("./coordenada");
var estado_1 = require("./estado");
var Barco = /** @class */ (function () {
    function Barco(_size, inicial, direccion) {
        this._size = _size;
        this._posiciones = [];
        this.crearBarco(inicial, direccion);
    }
    Barco.prototype.crearBarco = function (inicial, direccion) {
        for (var i = 0; i < this._size; i++) {
            this._posiciones.push(new Casilla_1.Casilla(estado_1.Estado.INDEMNE, new coordenada_1.Coordenada(inicial.X, inicial.Y)));
            //Tenemos el problema de que esta tarea no le corresponde a barco
            //        if (sentido==Sentido.ABAJO) {
            //          this.bajar()
            //        }else{
            //           this.avanzar()
            //        }
            //Pero si que le corresponde a coordenadas
            inicial.mover(direccion);
        }
    };
    Barco.prototype.getCoordenadaBarco = function (j) {
        return this.posiciones[j].coordenada;
    };
    Object.defineProperty(Barco.prototype, "posiciones", {
        get: function () {
            return this._posiciones;
        },
        enumerable: false,
        configurable: true
    });
    return Barco;
}());
exports.Barco = Barco;
//# sourceMappingURL=barco.js.map