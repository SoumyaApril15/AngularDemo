import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userType!: string;
  public password!: string
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // login() {
  //   this.authService.login(this.userType,);
  //   switch (this.userType) {
  //     case 'admin':
  //       this.router.navigateByUrl('home');
  //       break;
  //     case 'user1':
  //       this.router.navigateByUrl('/employee');
  //       break;
  //     case 'user2':
  //       this.router.navigateByUrl('/details');
  //       break;
  //     default:
  //       this.router.navigateByUrl('/');
  //   }
  // }

  
  login() {
    if (!this.userType || !this.password) {
      this.errorMessage = "Please enter both user type and password.";
      return;
    }

    if (!this.authService.login(this.userType, this.password)) {
      this.errorMessage = "Invalid user or password.";
      return;
    }

    // Clear error message if login successful
    this.errorMessage = '';

    // Redirect based on user type
    switch (this.userType) {
      case 'admin':
        this.router.navigateByUrl('/home');
        break;
      case 'user1':
        this.router.navigateByUrl('/user1');
        break;
      case 'user2':
        this.router.navigateByUrl('/user2');
        break;
      default:
        this.router.navigateByUrl('/');
    }
  }
}
