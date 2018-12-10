export class Log {
  constructor(
    public _id: string,
    public type: string,
    public celdaIni: string,
    public celdaFin: string,
    public placa: string,
    public modelo: string,
    public fecha: string
  ) {}

  setCeldaIni (celda: string) {
    this.celdaIni = celda;
  }
  setCeldaFin (celda: string) {
    this.celdaFin = celda;
  }
  setFecha(fecha: string) {
    this.fecha = fecha;
  }
}
