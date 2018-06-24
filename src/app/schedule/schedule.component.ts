import { Component, OnInit } from '@angular/core';
import {DayServiceClient} from '../services/day.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service: DayServiceClient) { }

  days;
  ngOnInit() {
    this.service.findAllDaysForSchedule(12)
      .then(days => this.days = days);
  }

}
