import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  users;
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
    this.service.finAllUsers()
      .then(users => this.users = users);
  }
  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  populate(user) {
    this.user = user;
  }

  update() {
    this.service.updateUserByAdmin(this.user)
      .then(response => {
        if (response.username == null) {
          alert('username does not exist');
        }
      })
      .then(() => this.ngOnInit());
  }

  register(user) {
    user.password = user.username;
      this.service
        .registerUserByAdmin(user)
        .then(response => {
          if (response.username == null) {
            alert('username already exists');
          } else {
            this.ngOnInit();
          }
        });
  }

  deleteUser(id) {
    this.service.deleteUser(id)
      .then(() => this.ngOnInit());
  }
}
