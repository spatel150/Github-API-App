import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username = "spatel150";

  constructor(private _http: HttpClient) {
    console.log("Github Service Start")
  }

  getUser() {
    return this._http.get("https://api.github.com/users/" + this.username).pipe(
      tap(data => console.log("All: " + JSON.stringify(data)))
    )
  }

  getRepos() {
    return this._http.get("https://api.github.com/users/" + this.username + '/repos?page=1&per_page=100').pipe(
      tap(data => console.log("All: " + JSON.stringify(data)))
    )
  }

  updateUsername(username:any) {
    this.username = username;
  }
}
