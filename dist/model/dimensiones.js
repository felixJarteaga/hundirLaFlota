"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimensiones = void 0;
var Dimensiones = /** @class */ (function () {
    function Dimensiones(_ancho, _largo) {
        this._ancho = _ancho;
        this._largo = _largo;
    }
    Object.defineProperty(Dimensiones.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (value) {
            this._ancho = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimensiones.prototype, "largo", {
        get: function () {
            return this._largo;
        },
        set: function (value) {
            this._largo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dimensiones;
}());
exports.Dimensiones = Dimensiones;
//# sourceMappingURL=dimensiones.js.map