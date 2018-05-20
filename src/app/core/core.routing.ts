import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';

const CORE_ROUTES: Routes = [
     { path: 'dashboard', component: DashboardComponent }
];

export const coreRoutes = RouterModule.forChild(CORE_ROUTES);
