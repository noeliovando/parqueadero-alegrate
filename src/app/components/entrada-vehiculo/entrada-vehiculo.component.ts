import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Celda } from '../../models/celda';
import { CeldaService } from '../../services/celda.service';

@Component({
  selector: 'app-entrada-vehiculo',
  templateUrl: './entrada-vehiculo.component.html',
  styleUrls: ['./entrada-vehiculo.component.css'],
  providers: [CeldaService, EventoService, ItemService]
})
export class EntradaVehiculoComponent implements OnInit {

  public title: string;
  public evento: Evento;
  public celda: Celda;
  public item: Item;
  public status: string;
  public placaExist: boolean;
  public celdas: Celda[];
  public spotAsig: string;

  constructor(
    private _eventoService: EventoService,
    private _celdaService: CeldaService,
    private _itemService: ItemService,
  ) {
    this.title = 'Entrada de Vehiculo';
    this.evento = new Evento('', 'Entrada', '', '', '', '', (new Date()).toString());
    this.item = new Item(2, '30', '0', 'Aparcado por');
  }

  ngOnInit() {
  }
  onSubmit(form) {
    this.saveEvent(form);
  }
  saveEvent(form) {
    const currentTime = new Date();
    let nCelda = Math.floor(Math.random() * 20) + 0;
    let celdaAsignada = false;
    let isOneFree = false;

    this._eventoService.getEventoPlaca(this.evento.placa).subscribe(
      res => {
        if (res.evento.length === 0) {
          this.placaExist = false;
          this._celdaService.getCeldas().subscribe(
            response => {
              if (response.celdas) {
                this.celdas = response.celdas;
                this.celdas.forEach(celda => {
                  if (celda.estatus === 'libre') {
                    isOneFree = true;
                  }
                  do {
                    console.log(res.evento.length);
                    console.log(this.celdas[nCelda].posicion);
                    if (nCelda - 1 >= 0) {console.log(this.celdas[nCelda - 1].estatus); }
                    console.log(this.celdas[nCelda].estatus);
                    if (this.celdas[nCelda].posicion === 'delante') {
                      if (nCelda - 1 >= 0 && this.celdas[nCelda - 1].estatus === 'libre') {
                        nCelda = nCelda - 1;
                        celdaAsignada = true;
                        this.celdas[nCelda].estatus = 'ocupado';
                      } else {
                        if (this.celdas[nCelda].estatus === 'libre') {
                          nCelda = nCelda;
                          celdaAsignada = true;
                          this.celdas[nCelda].estatus = 'ocupado';
                        }
                      }
                    } else if (this.celdas[nCelda].estatus === 'libre') {
                      nCelda = nCelda;
                      celdaAsignada = true;
                      this.celdas[nCelda].estatus = 'ocupado';
                    } else {
                      nCelda = Math.floor(Math.random() * 20) + 0;
                      celdaAsignada = false;
                    }
                  } while (!celdaAsignada);
                });
              }
              this.spotAsig = this.celdas[nCelda].etiqueta;
              this.celdas[nCelda].estatus = 'ocupado';
              this._celdaService.updateCelda(this.celdas[nCelda]).subscribe(
                result => {
                  console.log(result);
                },
                error => {
                  console.log(<any>error);
                }
              );
              this.evento.setCeldaIni(this.spotAsig);
              this.evento.setCeldaFin(this.spotAsig);
              this.evento.setFecha(currentTime.toString());
              this._eventoService.saveEvento(this.evento).subscribe(
                result => {
                  if (result.evento) {
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
              console.log('Asignar Celda:' + this.spotAsig);
            },
            error => {
              console.log(<any>error);
            }
          );
        } else {
          this.placaExist = true;
          this.status = 'failed';
          form.reset();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
