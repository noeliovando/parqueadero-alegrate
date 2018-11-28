import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { Celda } from '../../models/celda';
import { CeldaService } from '../../services/celda.service';

@Component({
  selector: 'app-entrada-vehiculo',
  templateUrl: './entrada-vehiculo.component.html',
  styleUrls: ['./entrada-vehiculo.component.css'],
  providers: [CeldaService, EventoService]
})
export class EntradaVehiculoComponent implements OnInit {

  public title: string;
  public evento: Evento;
  public celda: Celda;
  public status: string;
  public  celdas: Celda[];
  public spotAsig: string;

  constructor(
    private _eventoService: EventoService,
    private _celdaService: CeldaService,
  ) {
    this.asignarCelda();
    const currentTime = new Date();
    this.title = 'Entrada de Vehiculo';
    this.evento = new Evento('', 'Entrada', this.spotAsig, '', '', currentTime.toString());
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.spotAsig);
    this.getCeldaEtiqueta(this.spotAsig);
    this.evento.getCelda(this.spotAsig);
    this._eventoService.saveEvento(this.evento).subscribe(
      response => {
        if (response.evento) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  getCeldaEtiqueta(etiqueta) {
    this._celdaService.getCeldaEtiqueta(etiqueta).subscribe(
      response => {
        this.celda = response;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  asignarCelda() {
    let nCelda = Math.floor(Math.random() * 20) + 0;
    let celdaAsignada = false;
    let isOneFree = false;
    this._celdaService.getCeldas().subscribe(
      response => {
        if (response.celdas) {
          this.celdas = response.celdas;
          this.celdas.forEach(celda => {
            if (celda.estatus === 'libre') {
              isOneFree = true;
            }
            do {
              if (this.celdas[nCelda].posicion === 'delante') {
                if (this.celdas[nCelda - 1].estatus === 'libre') {
                  nCelda = nCelda - 1;
                  celdaAsignada = true;
                } else {
                  if (this.celdas[nCelda].estatus === 'libre') {
                    nCelda = nCelda;
                    celdaAsignada = true;
                  }
                }
              } else if (this.celdas[nCelda].estatus === 'libre') {
                nCelda = nCelda;
                celdaAsignada = true;
              } else {
                nCelda = Math.floor(Math.random() * 20) + 0;
                celdaAsignada = false;
              }
            } while (!celdaAsignada);
          });
        }
        this.spotAsig = this.celdas[nCelda].etiqueta;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
