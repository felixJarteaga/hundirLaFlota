"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var juego_1 = require("./control/juego");
var flota_1 = require("./model/flota");
var dimensiones_1 = require("./model/dimensiones");
var jugada = new juego_1.Juego();
var f = new flota_1.Flota(new dimensiones_1.Dimensiones(8, 12));
console.log(f.flotaBarcos);
//jugada.play()
//jugada.play()
//# sourceMappingURL=Main.js.map