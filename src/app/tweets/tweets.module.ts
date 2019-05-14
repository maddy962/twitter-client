import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopTweetsComponent } from './top-tweets.component';
import { TweetRoutingModule } from './tweet-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopTweetsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TweetRoutingModule
  ]
})
export class TweetsModule { }
