export class UserServiceClient {

  URL = 'http://localhost:8080';

  finAllUsers() {
    return fetch(URL + '/api/user')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(URL + '/api/logout', {
      method: 'delete'
    });
  }

  profile() {
    return fetch(URL + '/api/profile')
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(URL + '/api/user', {
      body: JSON.stringify(user),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
