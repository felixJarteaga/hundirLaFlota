"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barco = void 0;
var coordenada_1 = require("./coordenada");
var casilla_1 = require("./casilla");
var estado_1 = require("./estado");
var Barco = /** @class */ (function () {
    function Barco(_size, inicial, direccion) {
        this._size = _size;
        this._posiciones = [];
        this.crearBarco(inicial, direccion);
    }
    Barco.prototype.crearBarco = function (inicial, direccion) {
        for (var index = 0; index < this.size; index++) {
            this.posiciones.push(new casilla_1.Casilla(new coordenada_1.Coordenada(inicial.x, inicial.y), estado_1.Estado.indemne));
            //el fallo es que no tengo que conocer el mecanismo interno de la coordenada, este if debe estar en barco en el metodo mover.
            // if (direccion== Sentido.abajo) {
            //   inicial.bajar();
            // }else{
            //   inicial.avanzar();
            // }
            //lo correcto seria:
            inicial.mover(direccion);
        }
    };
    Barco.prototype.compruebaSolapamiento = function (casilla) {
        for (var index = 0; index < casilla.length; index++) {
            for (var indexObject = 0; indexObject < this._posiciones.length; indexObject++) {
                if (this.posiciones[indexObject].coordenada.equals(casilla[index].coordenada)) {
                    return true;
                }
            }
        }
        return false;
    };
    Object.defineProperty(Barco.prototype, "size", {
        /**
         * Getter size
         * @return {number}
         */
        get: function () {
            return this._size;
        },
        /**
         * Setter size
         * @param {number} value
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barco.prototype, "posiciones", {
        /**
         * Getter posiciones
         * @return {Casilla[]}
         */
        get: function () {
            return this._posiciones;
        },
        /**
         * Setter posiciones
         * @param {Casilla[]} value
         */
        set: function (value) {
            this._posiciones = value;
        },
        enumerable: false,
        configurable: true
    });
    return Barco;
}());
exports.Barco = Barco;
//# sourceMappingURL=barco.js.map