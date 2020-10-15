"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension = void 0;
var Dimension = /** @class */ (function () {
    function Dimension(_altoD, _anchoD) {
        this._altoD = _altoD;
        this._anchoD = _anchoD;
    }
    Object.defineProperty(Dimension.prototype, "altoD", {
        get: function () {
            return this._altoD;
        },
        set: function (value) {
            this._altoD = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimension.prototype, "anchoD", {
        get: function () {
            return this._anchoD;
        },
        set: function (value) {
            this._anchoD = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dimension;
}());
exports.Dimension = Dimension;
//# sourceMappingURL=dimension.js.map