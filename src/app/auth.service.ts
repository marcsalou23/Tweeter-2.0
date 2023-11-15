// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Implement your login logic and API call here
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(username: string, password: string): Observable<any> {
    // Implement your registration logic and API call here
    const userData = { username, password };
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}

