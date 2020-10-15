export class Dimension{
    constructor(private _altoD:number,private _anchoD:number) {

    }

    get altoD(): number {
        return this._altoD;
    }

    set altoD(value: number) {
        this._altoD = value;
    }

    get anchoD(): number {
        return this._anchoD;
    }

    set anchoD(value: number) {
        this._anchoD = value;
    }
}