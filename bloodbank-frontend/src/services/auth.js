// Placeholder file for authentication services
// This will handle JWT tokens, user sessions, etc.

export 

export 

export class AuthService {
  private static TOKEN_KEY = 'bloodbank_token';
  private static USER_KEY = 'bloodbank_user';

  static setAuthToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static getAuthToken() | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static setUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static getUser() | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) ;
  }

  static isAuthenticated() {
    return !!this.getAuthToken();
  }

  static logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static getAuthHeaders()<string, string> {
    const token = this.getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}