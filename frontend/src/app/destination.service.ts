import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from './user.service';
import {Attraction} from './attraction';
import { Comment } from './comment';

@Injectable()
export class DestinationService {

  result: any;

  constructor(private _http: Http, private auth: UserService) { }

  getDestinations() {
    return this._http.get('/api/all')
      .map(result => this.result = result.json());
  }

  getDestination(id) {
    return this._http.get('/api/destinations/' + id)
      .map(result => this.result = result.json());
  }
  getAttraction(id) {
    return this._http.get('/api/attractions/' + id)
      .map(result => this.result = result.json());
  }

  getUser() {
    return this._http.get('/api/users/me', this.auth.tokenHeader)
      .map(result => this.result = result.json());
  }

  // addcomment(){
  //   register(user) {
  //     delete user.confirmPassword;
  //     this._http.post('/auth/createUser', user).subscribe(res => {
  //       this.authenticate(res);
  //     });
  //   }
  insertComment(post: Comment,id){

    let headers= new Headers({'Content-Type': 'application/json'});
    let options= new RequestOptions({ headers: headers });
    return this._http.post('/api/attractions/' + id,JSON.stringify(post),options)
    .map(result=>this.result = result.json());
  }
  deleteComment(id) {
    return this._http.get('/api/delete/' + id)
      .map(result => this.result = result.json());
  }
  }


