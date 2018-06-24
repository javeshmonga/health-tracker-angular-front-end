export class ScheduleServiceClient {

  SCHEDULE_URL = 'http://localhost:8080/api/schedule';

  findAllSchedules() {
    return fetch(this.SCHEDULE_URL)
      .then(response => response.json());
  }
}
