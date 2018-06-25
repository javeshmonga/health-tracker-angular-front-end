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

}
