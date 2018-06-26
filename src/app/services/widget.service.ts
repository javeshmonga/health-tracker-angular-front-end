export class WidgetServiceClient {

  URL = 'http://localhost:8080';

  findAllWidgetsForDay(dayId) {
    return fetch(this.URL + '/api/day/' + dayId + '/widget')
      .then(response => response.json());
  }

  createWidget(dayId) {
    const widget = {};
    return fetch(this.URL + '/api/day/' + dayId + '/widget', {
      method: 'post',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  saveWidgets(widgets, dayId) {
    return fetch(this.URL + '/api/day/' + dayId + '/widget/save', {
      method: 'post',
      body: JSON.stringify(widgets),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteWidget(id) {
    return fetch(this.URL + '/api/widget/' + id, {
      method: 'delete'
    }).then(response => response.json());
  }
}
