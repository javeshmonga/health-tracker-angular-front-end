import { Component } from '@angular/core';
import * as http from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  queryTerm: String;
  Foods = [];
  food;

  selectSearch() {
    console.log(this.queryTerm);
    this.service()
      .then(Foods => {
        this.Foods = Foods;
      });
    console.log(this.Foods);
  }

  service() {
    return fetch('http://localhost:3000/api/poc/' + this.queryTerm)
      .then(response => response.json());
  }

  displayDetails(food) {
    console.log(food.food_name);
  }
}
