import { Component, OnInit } from '@angular/core';
import {ScheduleServiceClient} from '../services/schedule.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  constructor(private service: ScheduleServiceClient) { }

  schedules;

  ngOnInit() {
    this.service.findAllSchedules()
      .then(schedules => this.schedules = schedules);
  }

}
