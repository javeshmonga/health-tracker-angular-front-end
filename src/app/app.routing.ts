import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ScheduleListComponent} from './schedule-list/schedule-list.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {PocComponent} from './poc/poc.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'schedules', component: ScheduleListComponent},
  { path: 'about_us', component: AboutUsComponent},
  { path: 'contact_us', component: ContactUsComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'schedule/:scheduleId', component: ScheduleComponent},
  { path: 'schedule/:scheduleId/poc', component: PocComponent},
  { path: 'schedule/:scheduleId/day/:dayId/widget', component: ScheduleComponent},
  { path: '**', component: HomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
