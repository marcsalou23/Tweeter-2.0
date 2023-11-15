// tweet.component.ts
import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  constructor(private tweetService: TweetService) {}

  postTweet(content: string): void {
    // Example: Post a tweet
    this.tweetService.postTweet(1, content).subscribe(
      (response) => {
        console.log('Tweet posted successfully:', response);
        // Additional logic if needed
      },
      (error) => {
        console.error('Error posting tweet:', error);
        // Handle error
      }
    );
  }

  getTimeline(): void {
    // Example: Get user's timeline
    this.tweetService.getTimeline(1).subscribe(
      (timeline) => {
        console.log('User timeline:', timeline);
        // Update component with timeline data
      },
      (error) => {
        console.error('Error fetching timeline:', error);
        // Handle error
      }
    );
  }
}
