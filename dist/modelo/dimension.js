"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension = void 0;
var Dimension = /** @class */ (function () {
    function Dimension(_alto, _ancho) {
        this._alto = _alto;
        this._ancho = _ancho;
    }
    Object.defineProperty(Dimension.prototype, "alto", {
        get: function () {
            return this._alto;
        },
        set: function (value) {
            this._alto = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimension.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (value) {
            this._ancho = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dimension;
}());
exports.Dimension = Dimension;
//# sourceMappingURL=dimension.js.map