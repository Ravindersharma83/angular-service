import { LoggerService } from "./logger.service";
import{Injectable} from "@angular/core";

@Injectable()
export class UserService{
  // fetching data from another service
  constructor(private logger:LoggerService){}
  // getting user details
  users=[
    {name:'Ravinder', status: 'active'},
    {name:'Nik', status: 'active'},
    {name:'Rohit', status: 'inactive'},
  ];

  // adding new user in the above array
  AddNewUser(name:string, status:string){
    this.users.push({name:name,status:status});
    this.logger.LogMessage(name,status);
  }

}
