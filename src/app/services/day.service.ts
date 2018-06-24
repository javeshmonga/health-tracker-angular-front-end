export class DayServiceClient {

  SCHEDULE_URL = 'http://localhost:8080/api/schedule';

  findAllDaysForSchedule(scheduleId) {
    return fetch(this.SCHEDULE_URL + '/' + scheduleId + '/day')
      .then(response => response.json());
  }
}
