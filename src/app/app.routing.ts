import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CeldaReportComponent } from './components/celda-report/celda-report.component';
import { EntradaVehiculoComponent } from './components/entrada-vehiculo/entrada-vehiculo.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ApiConnectComponent} from './components/api-connect/api-connect.component';
import { SpotlistComponent} from './components/spotlist/spotlist.component';


const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'reporte-celdas', component: CeldaReportComponent},
  {path: 'entrada-vehiculo', component: EntradaVehiculoComponent},
  {path: 'spotlist', component: SpotlistComponent},
  {path: 'factura/:id', component: FacturaComponent},
  {path: 'apiConnect', component: ApiConnectComponent},
  {path: '**', component: DashboardComponent},
];

export const appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
