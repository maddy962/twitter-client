import { Component, OnInit } from '@angular/core';
import { ITweets } from './tweets';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-tweets',
  templateUrl: './top-tweets.component.html',
  styleUrls: ['./top-tweets.component.css']
})
export class TopTweetsComponent implements OnInit {

  tweets: ITweets[] = [{
    TweetTitle: "Tweet 1"
  },{
    TweetTitle:"Tweet 2"
  },
{
  TweetTitle:"Tweet 3"
}]
  constructor(private authService: AuthService,private route: Router) { 
    if(!this.authService.isLoggedIn()){
      alert('Invalid User! Authentication Failed!');
      this.route.navigate(['/authentication']);
    }
  }

  ngOnInit() {
  }

}
