"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
var generadorFlota_1 = require("./generadorFlota");
var Flota = /** @class */ (function () {
    function Flota(_dimensiones) {
        this._dimensiones = _dimensiones;
        this._almacenDeBarcos = [];
        this._fabricaDeBarcos = new generadorFlota_1.GeneradorFlota(this._dimensiones);
        this.generarFlota();
    }
    Flota.prototype.generarFlota = function () {
        var tamannosDeBarcos = [4, 4, 3, 3, 3, 2, 2, 2, 2];
        for (var i = 0; i < tamannosDeBarcos.length; i++) {
            this._almacenDeBarcos[i] = this._fabricaDeBarcos.crearBarco(tamannosDeBarcos[i]);
        }
    };
    Object.defineProperty(Flota.prototype, "almacenDeBarcos", {
        get: function () {
            return this._almacenDeBarcos;
        },
        set: function (value) {
            this._almacenDeBarcos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flota.prototype, "fabricaDeBarcos", {
        get: function () {
            return this._fabricaDeBarcos;
        },
        set: function (value) {
            this._fabricaDeBarcos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flota.prototype, "dimensiones", {
        get: function () {
            return this._dimensiones;
        },
        set: function (value) {
            this._dimensiones = value;
        },
        enumerable: false,
        configurable: true
    });
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map