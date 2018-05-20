import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { coreRoutes } from './core.routing';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  imports: [
    CommonModule,
    coreRoutes,
    MatCheckboxModule,

  ],
  declarations: [DashboardComponent]
})
export class CoreModule { }
