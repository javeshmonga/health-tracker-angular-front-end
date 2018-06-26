import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/widget.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private service: WidgetServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  this.route.params.subscribe(
    params => this.setParams(params));
}

  scheduleId;
  dayId;
  widgets = [];
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
    this.userService
      .profile()
      .then(user =>
        this.user = user);
  }

  setParams(params) {
    this.dayId = params['dayId'];
    this.scheduleId = params['scheduleId'];
    this.loadWidgets();
  }

  loadWidgets() {
    this.service.findAllWidgetsForDay(this.dayId)
      .then(widgets => this.widgets = widgets);
  }

  addWidget(dayId) {
    this.service.createWidget(dayId)
      .then(() => this.loadWidgets());
  }

  saveWidgets() {
    this.service.saveWidgets(this.widgets, this.dayId)
      .then(() => this.loadWidgets());
  }

  deleteWidget(id) {
    this.service.deleteWidget(id)
      .then(() => this.router.navigate['schedule/' + this.scheduleId + '/day/' + this.dayId + '/widget']);
  }
}
