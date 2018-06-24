import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  constructor() { }

  queryTerm: String;
  Foods = [];
  food;

  ngOnInit() {
  }


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
    this.food = food;
  }
}
