import { Component, OnInit } from '@angular/core';
import {DayServiceClient} from '../services/day.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleServiceClient,
              private dayService: DayServiceClient,
              private service: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  scheduleId;
  days;

  schedule;

  user = {
    username: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    schedule: {}
  };

  setParams(params) {
    this.scheduleId = params['scheduleId'];
    this.loadDays();
  }

  loadDays() {
    console.log(this.scheduleId);
    this.dayService.findAllDaysForSchedule(this.scheduleId)
      .then(days => this.days = days);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user =>
        this.user = user);
    this.scheduleService.findScheduleById(this.scheduleId)
      .then(schedule => this.schedule = schedule);
  }

  createDay(scheduleId) {
    this.dayService.createDay(scheduleId)
      .then(response => this.router.navigate(['schedule/' + this.scheduleId + '/day/' + response.id + '/widget']));
  }

  saveSchedule() {
    this.scheduleService.saveSchedule(this.schedule);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  deleteDay(dayId) {
    this.dayService.deleteDay(dayId)
      .then(() => this.router.navigate(['schedule/' + this.scheduleId]));
  }
}
