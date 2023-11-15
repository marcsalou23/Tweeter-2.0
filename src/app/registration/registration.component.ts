// registration.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    // Example: Perform user registration
    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // Additional logic if needed
      },
      (error) => {
        console.error('Error during registration:', error);
        // Handle error
      }
    );
  }
}
