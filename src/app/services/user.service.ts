export class UserServiceClient {

  URL = 'https://quiet-fjord-77462.herokuapp.com';

  finAllUsers() {
    return fetch(this.URL + '/api/user')
      .then(response => response.json());
  }

  login(username, password) {
    const userCredentials = {
      username: username,
      password: password
    };
    return fetch(this.URL + '/api/login', {
      body: JSON.stringify(userCredentials),
      method: 'post',
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

  register(user) {
    return fetch(this.URL + '/api/register', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateUser(user) {
    return fetch(this.URL + '/api/user/update', {
      body: JSON.stringify(user),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  registerUserByAdmin(user) {
    return fetch(this.URL + '/api/register/admin', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'post'
    }).then(respose => respose.json());
  }

  updateUserByAdmin(user) {
    return fetch(this.URL + '/api/user/update/admin', {
      body: JSON.stringify(user),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteUser(id) {
    return fetch(this.URL + '/api/user/' + id, {
      method: 'delete'
    });
  }
}
