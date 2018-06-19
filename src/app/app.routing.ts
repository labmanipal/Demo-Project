import { Routes, RouterModule } from '@angular/router';
// import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: DetailsComponent }
];

export const appRoutes = RouterModule.forRoot(APP_ROUTES);
