export class Evento {
  constructor(
    public _id: string,
    public type: string,
    public celda: string,
    public placa: string,
    public modelo: string,
    public fecha: string
  ) {}

  getCelda (celda) {
    this.celda = celda;
  }
}
