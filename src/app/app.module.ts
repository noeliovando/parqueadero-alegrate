import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CeldaReportComponent } from './components/celda-report/celda-report.component';
import { EntradaVehiculoComponent } from './components/entrada-vehiculo/entrada-vehiculo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { EventolistComponent } from './components/eventolist/eventolist.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    DashboardComponent,
    CeldaReportComponent,
    EntradaVehiculoComponent,
    NavbarComponent,
    EventolistComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
