// tweet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  private apiUrl = 'http://your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getTimeline(userId: number): Observable<any> {
    // Implement your logic to fetch user's timeline
    return this.http.get(`${this.apiUrl}/timeline/${userId}`);
  }

  postTweet(userId: number, content: string): Observable<any> {
    // Implement your logic to post a tweet
    const tweetData = { userId, content };
    return this.http.post(`${this.apiUrl}/tweets`, tweetData);
  }
}
