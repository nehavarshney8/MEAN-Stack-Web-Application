import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  result:any;
  constructor(private _http: Http, private router: Router) { }

  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader() {
    var header = new Headers({'Authorization': 'Bearer '+ localStorage.getItem(this.TOKEN_KEY)});
        return new RequestOptions({ headers: header});
  }

  login(loginData) {

    this._http.post('/auth/login', loginData).subscribe(res => {
      this.authenticate(res);
    });
  }

  register(user) {
    delete user.confirmPassword;
    this._http.post('/auth/createUser', user).subscribe(res => {
      this.authenticate(res);
    });
  }
  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

  authenticate(res) {
    const authResponse = res.json();

                if (!authResponse.token) {
                    alert('Authentication Failed');
                    document.location.reload(true);
                    return;
                }

                localStorage.setItem(this.TOKEN_KEY, authResponse.token);
                localStorage.setItem(this.NAME_KEY, authResponse.firstName);
                this.router.navigate(['/home']);
}
}
