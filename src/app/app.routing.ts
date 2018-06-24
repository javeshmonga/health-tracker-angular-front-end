import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ScheduleListComponent} from './schedule-list/schedule-list.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {PocComponent} from './poc/poc.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'schedules', component: ScheduleListComponent},
  { path: 'schedule/:scheduleId', component: ScheduleComponent},
  { path: 'schedule/:scheduleId/poc', component: PocComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
