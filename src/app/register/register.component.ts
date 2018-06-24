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
              private service: UserServiceClient) { }

  user = {
    username: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    schedule: {}
  };
  password2;

  ngOnInit() {
  }

  register(user, password2) {
    if (user.password !== password2) {
      alert('passwords does not match');
    } else {
      this.service
        .register(user)
        .then(response => {
          if (response.username == null) {
            alert('username already exists');
          } else {
            this.router.navigate(['home']);
          }
        });
    }
  }
}
