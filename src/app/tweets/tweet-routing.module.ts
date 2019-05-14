import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopTweetsComponent } from './top-tweets.component';


const routes: Routes = [
    {path:'toptweets', component:TopTweetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
