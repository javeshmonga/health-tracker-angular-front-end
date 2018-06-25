import { Component, OnInit } from '@angular/core';
import {ScheduleServiceClient} from '../services/schedule.service';
import {UserServiceClient} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private service: ScheduleServiceClient,
              private router: Router) { }

  user = {
    username: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    schedule: {
      id: ''
    }
  }
  schedules;

  ngOnInit() {
    this.service.findAllSchedules()
      .then(schedules => this.schedules = schedules);
    this.userService
      .profile()
      .then(user =>
        this.user = user);
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
}
