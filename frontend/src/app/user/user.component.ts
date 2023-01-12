import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private route:ActivatedRoute,private githubService:GithubService){}
  isLoading=false
  userGithubRepo:any
  userInfo:any
  ngOnInit(): void {
    this.route.params.subscribe((responseData)=>{
      console.log(responseData['user-id'])
      let userid=responseData['user-id']
      this.githubService.fetchUserRepos(userid).subscribe(responseData=>{
        this.userGithubRepo=responseData
        console.log(this.userGithubRepo)
      })
      this.githubService.fetchUserInfo(userid).subscribe(responseData=>{
        this.userInfo=responseData
        console.log(this.userInfo)
      })
    })
  }
}
