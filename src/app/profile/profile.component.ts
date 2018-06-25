import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) {}
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

  update() {
    this.service.updateUser(this.user)
      .then(() => this.ngOnInit());
  }
}
