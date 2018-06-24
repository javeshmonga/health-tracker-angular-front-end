import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PocComponent } from './poc/poc.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DaysListComponent } from './days-list/days-list.component';
import { DayComponent } from './day/day.component';
import {ScheduleServiceClient} from './services/schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    ScheduleListComponent,
    ScheduleComponent,
    DaysListComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ScheduleServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
