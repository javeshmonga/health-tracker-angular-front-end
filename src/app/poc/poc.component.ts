import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service';
import {Router} from '@angular/router';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  constructor(private scheduleService: ScheduleServiceClient,
              private userService: UserServiceClient,
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

  toggleSearch = false;
  toggleDetail = false;
  queryTerm: String;
  Foods = [];
  food;


  ngOnInit() {
    this.userService
      .profile()
      .then(user =>
        this.user = user);
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  selectSearch() {
    this.toggleSearch = true;
    this.toggleDetail = false;
    console.log(this.queryTerm);
    this.service()
      .then(Foods => {
        this.Foods = Foods;
      });
    console.log(this.Foods);
  }

  service() {
    return fetch('https://powerful-basin-21524.herokuapp.com/api/poc/' + this.queryTerm)
      .then(response => response.json());
  }

  displayDetails(food) {
    this.toggleDetail = true;
    console.log(food.food_name);
    this.food = food;
  }

}
