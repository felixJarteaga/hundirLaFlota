export class Dimension{
    constructor(private _alto:number,private _ancho:number) {

    }

    get alto(): number {
        return this._alto;
    }

    set alto(value: number) {
        this._alto = value;
    }

    get ancho(): number {
        return this._ancho;
    }

    set ancho(value: number) {
        this._ancho = value;
    }
}