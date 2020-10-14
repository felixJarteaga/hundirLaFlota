import { Sentido } from "./sentido";

export class Coordenada{


// la forma ts para declarar propiedades obligatorias
constructor(private _x:number,private _y:number){


}


public get x(){
  return this._x;
}


  public set x(xs:number){
    this._x= xs;
  }


  public get y(){
  return this._y;
}


  public set y(ys:number){
    this._x= ys;
  }


  //hay cosas java que siempre vienen bien
  public equals(coordenada:Coordenada):boolean {
  
  return this.x==coordenada.x && this.y==coordenada.y;
}

public mover(direccion:Sentido) {
   if (direccion== Sentido.abajo) {
        this.bajar();
      }else{
        this.avanzar();
      }
}

public bajar(){
  this._y++;
}


public avanzar(){
  this._x++;
}
}
