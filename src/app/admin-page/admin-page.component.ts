import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

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

}
