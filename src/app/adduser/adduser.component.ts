import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers:[UserService],
})
export class AdduserComponent implements OnInit {
  username:string = ''; // bind this property using two way binding in html file
  status:string = 'active';

  constructor(private userService : UserService){}

  ngOnInit(): void {
  }

  AddUser(){
    this.userService.AddNewUser(this.username,this.status);
  }
}
