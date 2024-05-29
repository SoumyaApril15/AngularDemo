import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userType: any;

  // Mock user data for simplicity (replace with your actual authentication logic)
  private users: { [key: string]: { password: string } } = {
    admin: { password: 'admin123' },
    user1: { password: 'user1123' },
    user2: { password: 'user2123' }
  };


  public login(userType: string, password: string): boolean {
    // Check if user type exists
    if (!this.users[userType]) {
      return false; // Invalid user type
    }

    // Check if password matches
    if (this.users[userType].password !== password) {
      return false; // Invalid password
    }

    // Authentication successful
    this.isLoggedIn = true;
    this.userType = userType;
    return true;
  }

  logout() {
    this.isLoggedIn = false;
    this.userType = null;
  }

  isAdmin() {
    return this.userType === 'admin';
  }

  isUser1() {
    return this.userType === 'user1';
  }

  isUser2() {
    return this.userType === 'user2';
  }
}
