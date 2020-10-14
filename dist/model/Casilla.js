"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casilla = void 0;
var Casilla = /** @class */ (function () {
    function Casilla(_status, _coordenada) {
        this._status = _status;
        this._coordenada = _coordenada;
    }
    Object.defineProperty(Casilla.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casilla.prototype, "coordenada", {
        get: function () {
            return this._coordenada;
        },
        set: function (value) {
            this._coordenada = value;
        },
        enumerable: false,
        configurable: true
    });
    return Casilla;
}());
exports.Casilla = Casilla;
//# sourceMappingURL=Casilla.js.map