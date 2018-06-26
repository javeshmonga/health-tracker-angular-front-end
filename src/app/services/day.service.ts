export class DayServiceClient {

  SCHEDULE_URL = 'https://quiet-fjord-77462.herokuapp.com';

  findAllDaysForSchedule(scheduleId) {
    return fetch(this.SCHEDULE_URL + '/api/schedule/' + scheduleId + '/day')
      .then(response => response.json());
  }

  createDay(scheduleId) {
    const day = {};
    return fetch(this.SCHEDULE_URL + '/api/schedule/' + scheduleId + '/day', {
      method: 'post',
      body: JSON.stringify(day),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteDay(dayId) {
    return fetch(this.SCHEDULE_URL + '/api/day/' + dayId, {
      method: 'delete'
    }).then(response => response.json);
  }
}
