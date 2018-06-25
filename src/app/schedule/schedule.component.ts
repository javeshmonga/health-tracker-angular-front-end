import { Component, OnInit } from '@angular/core';
import {DayServiceClient} from '../services/day.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private scheduleService: DayServiceClient,
              private service: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  scheduleId;
  days;

  user = {
    username: '',
    password: '',
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
    this.scheduleService.findAllDaysForSchedule(this.scheduleId)
      .then(days => this.days = days);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user =>
        this.user = user);
  }

  createDay(scheduleId) {
    this.scheduleService.createDay(scheduleId)
      .then(() => this.loadDays());
  }

}
