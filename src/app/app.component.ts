import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LoggerService]
})
export class AppComponent implements OnInit {
  title = 'angular-services-tut';

  constructor(private userService : UserService, private loggerService : LoggerService){}

  users:{name:string,status:string}[] =[];

  ngOnInit(){
    this.users = this.userService.users;
  }
}
