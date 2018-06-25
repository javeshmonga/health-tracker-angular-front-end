export class ScheduleServiceClient {

  SCHEDULE_URL = 'http://localhost:8080/api/schedule';

  findAllSchedules() {
    return fetch(this.SCHEDULE_URL)
      .then(response => response.json());
  }

  findScheduleById(scheduleId) {
    return fetch(this.SCHEDULE_URL + '/' + scheduleId)
      .then(response => response.json());
  }

  saveSchedule(schedule) {
    return fetch(this.SCHEDULE_URL, {
      method: 'post',
      body: JSON.stringify(schedule),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
