export class UserServiceClient {

  URL = 'http://localhost:8080';

  finAllUsers() {
    return fetch(this.URL + '/api/user')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(this.URL + '/api/logout', {
      method: 'delete'
    });
  }

  profile() {
    return fetch(this.URL + '/api/profile')
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.URL + '/api/register', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'post'
    }).then(respose => respose.json());
  }
}
