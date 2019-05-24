import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user : Observable<firebase.User>;
  private userDetails: firebase.auth.UserCredential;
  

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;
  }

  TwitterSignIn(){
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(
      (res)=>{
       localStorage.setItem('authenticatedUser',res.user.uid);
       localStorage.setItem('oauthkey','740947421975322624-QDKvnJ2YyHLLzIfGV2dRrCIE7Hc6ybW');
       localStorage.setItem('oauthToken','AfGZnw02IuxWGXY923hMYiKpwm7rjaIq7vzxIU3s6yexq');
       console.log('cookie set');
      }
    );
  }


  isLoggedIn():boolean{
    console.log(localStorage.getItem('authenticatedUser'));
    if(localStorage.getItem('authenticatedUser')!=null){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('authenticatedUser');
  }

  
}
