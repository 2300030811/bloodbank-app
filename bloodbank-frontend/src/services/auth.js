export class AuthService {
  static TOKEN_KEY = 'bloodbank_token';
  static USER_KEY = 'bloodbank_user';

  static setAuthToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static setUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static getUser() {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  static isAuthenticated() {
    return !!this.getAuthToken();
  }

  static logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static getAuthHeaders() {
    const token = this.getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}
