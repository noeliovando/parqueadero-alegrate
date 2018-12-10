import { Component, OnInit } from '@angular/core';
import { Log} from '../../models/log';
import { Top} from '../../models/top';
import { LogService} from '../../services/log.service';
import { CeldaService} from '../../services/celda.service';

@Component({
  selector: 'app-celda-report',
  templateUrl: './celda-report.component.html',
  styleUrls: ['./celda-report.component.css'],
  providers: [LogService, CeldaService]
})
export class CeldaReportComponent implements OnInit {

  public log: Log;
  public tops: Top[] = [];
  constructor(
    private _logservice: LogService,
    private _celdaservice: CeldaService
  ) { }

  ngOnInit() {
    this.getLog();
  }
  getLog() {
    this._celdaservice.getCeldas().subscribe(
      resCelda => {
        this._logservice.getLogs().subscribe(
          resLog => {
            resCelda.celdas.forEach(celda => {
              let repeticiones = 0;
              resLog.logs.forEach(log => {
                if (log.celdaIni === celda.etiqueta) {
                  repeticiones++;
                }
              });
              this.tops.push(new Top(celda.etiqueta, repeticiones));
            });
            this.tops = this.tops.sort((a, b) => {
              return b.apariciones - a.apariciones;
            });
          },
          error => {
            console.log(<any>error);
          }
        );
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
