"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
var sentido_1 = require("./sentido");
var Coordenada = /** @class */ (function () {
    //La forma de ts para declarar propiedades obligatorias
    function Coordenada(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Coordenada.prototype, "X", {
        //Hay cosas java que siempre vienen bien
        get: function () {
            return this._x;
        },
        set: function (xv) {
            this._x = xv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordenada.prototype, "Y", {
        get: function () {
            return this._y;
        },
        set: function (yv) {
            this._y = yv;
        },
        enumerable: false,
        configurable: true
    });
    Coordenada.prototype.equals = function (coordenada) {
        return this._x == coordenada.X && this._y == coordenada.Y;
    };
    Coordenada.prototype.mover = function (sentido) {
        if (sentido == sentido_1.Sentido.ABAJO) {
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