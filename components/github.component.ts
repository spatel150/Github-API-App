import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-github',
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {
  title = 'github-angular-app';
  user:any;
  repos:any;
  username:any;

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

  search() {
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

  ngOnInit(): void {

  }

}
