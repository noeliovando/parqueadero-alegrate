import { ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CeldaReportComponent } from './components/celda-report/celda-report.component';
import { EntradaVehiculoComponent } from './components/entrada-vehiculo/entrada-vehiculo.component';


const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'reporte-celdas', component: CeldaReportComponent},
  {path: 'entrada-vehiculo', component: EntradaVehiculoComponent},
  {path: '**', component: DashboardComponent},
];

export const appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
