import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';



import {
  AuthService,
  FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Array<User>;
  constructor(private auth: UserService, private socialAuthService: AuthService) { }
  isloginSuccess: boolean = true;
  loginData = {
    email: '',
    password: ''
  };

  login() {
    this.auth.login(this.loginData);
  }

  ngOnInit() {

    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        
            
      }
    );
  }
}
