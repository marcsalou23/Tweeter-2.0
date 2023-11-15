// timeline.component.ts
import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  timeline: any[] = [];

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.fetchTimeline();
  }

  fetchTimeline(): void {
    // Example: Get user's timeline
    this.tweetService.getTimeline(1).subscribe(
      (timeline) => {
        console.log('User timeline:', timeline);
        this.timeline = timeline;
        // Update component with timeline data
      },
      (error) => {
        console.error('Error fetching timeline:', error);
        // Handle error
      }
    );
  }
}
