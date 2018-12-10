import { Component, OnInit } from '@angular/core';
import { Celda } from '../../models/celda';
import { CeldaService} from '../../services/celda.service';

@Component({
  selector: 'app-spotlist',
  templateUrl: './spotlist.component.html',
  styleUrls: ['./spotlist.component.css'],
  providers: [CeldaService]
})
export class SpotlistComponent implements OnInit {

  public  celdas: Celda[];
  public  celdasFront: Celda[] = [];
  public  celdasBack: Celda[] = [];
  constructor(
    private _celdaService: CeldaService,
  ) { }

  ngOnInit() {
    this._celdaService.getCeldas().subscribe(
      result => {
        this.celdas = result.celdas;
        this.celdas.forEach(celda => {
          if (celda.posicion === 'delante') { this.celdasFront.push(celda); }
          if (celda.posicion === 'atras') { this.celdasBack.push(celda); }
        });
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
