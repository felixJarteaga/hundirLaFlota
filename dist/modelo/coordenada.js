"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
var sentido_1 = require("./sentido");
var Coordenada = /** @class */ (function () {
    // la forma ts para declarar propiedades obligatorias
    function Coordenada(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Coordenada.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (xs) {
            this._x = xs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordenada.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (ys) {
            this._x = ys;
        },
        enumerable: false,
        configurable: true
    });
    //hay cosas java que siempre vienen bien
    Coordenada.prototype.equals = function (coordenada) {
        return this.x == coordenada.x && this.y == coordenada.y;
    };
    Coordenada.prototype.mover = function (direccion) {
        if (direccion == sentido_1.Sentido.abajo) {
            this.bajar();
        }
        else {
            this.avanzar();
        }
    };
    Coordenada.prototype.bajar = function () {
        this._y++;
    };
    Coordenada.prototype.avanzar = function () {
        this._x++;
    };
    return Coordenada;
}());
exports.Coordenada = Coordenada;
//# sourceMappingURL=coordenada.js.map