import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient,
              private scheduleService: ScheduleServiceClient) { }

  username;
  password;
  password2;

  ngOnInit() {
  }

  register(username, password, password2) {
    if (password !== password2) {
      alert('passwords does not match');
    } else {
      this.service
        .register(username, password)
        .then(response => {
          if (response.username == null) {
            alert('username already exists');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }
}
