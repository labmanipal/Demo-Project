import { Routes, RouterModule } from '@angular/router';
// import { NotfoundComponent } from './notfound/notfound.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '', loadChildren: './onboard/onboard.module#OnboardModule' },
  { path: '', loadChildren: './core/core.module#CoreModule' }
  // { path: '**', component: NotfoundComponent }
];

export const appRoutes = RouterModule.forRoot(APP_ROUTES);
