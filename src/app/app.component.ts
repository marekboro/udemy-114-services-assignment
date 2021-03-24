import { Component, OnInit } from '@angular/core';
import {UsersService} from './shared/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers: string[]  =[];
  inactiveUsers: string[] =[];
  counter:number = 0;

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    

  }

  constructor(private usersService:UsersService){}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.counter=this.usersService.showCounter();
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counter=this.usersService.showCounter();
  }
}
