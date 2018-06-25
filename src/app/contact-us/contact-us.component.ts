import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service';
import {Router} from '@angular/router';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

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

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

}
