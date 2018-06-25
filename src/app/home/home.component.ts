import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scheduleService: ScheduleServiceClient,
              private service: UserServiceClient,
              private router: Router) {}

  schedule;
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
  };

  ngOnInit() {
    this.service
      .profile()
      .then(user =>
        this.user = user);
  }
}
