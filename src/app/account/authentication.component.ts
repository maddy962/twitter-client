import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from './login';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  //Modular Changes
  constructor(private router: Router, private authService:AuthService,private ngZone:NgZone) {
    if(this.authService.isLoggedIn()){
      this.authService.logout();
    }
   }

  ngOnInit() {
  }
  authenticate()
  {
    this.authService.TwitterSignIn().then((res) => { 
      this.navigate(['/toptweets'])
    })
  .catch((err) => console.log(err));; 
  }
  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
}

}
