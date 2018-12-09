import { Component, OnInit } from '@angular/core';
import { ApiconnectService} from '../../services/apiconnect.service';

@Component({
  selector: 'app-api-connect',
  templateUrl: './api-connect.component.html',
  styleUrls: ['./api-connect.component.css'],
  providers: [ApiconnectService]
})
export class ApiConnectComponent implements OnInit {

  constructor(
    private _apiconnectService: ApiconnectService
  ) { }

  ngOnInit() {

    this._apiconnectService.createFactura().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
