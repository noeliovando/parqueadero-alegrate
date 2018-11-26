import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CeldaReportComponent } from './components/celda-report/celda-report.component';
import { EntradaVehiculoComponent } from './components/entrada-vehiculo/entrada-vehiculo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    DashboardComponent,
    CeldaReportComponent,
    EntradaVehiculoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
