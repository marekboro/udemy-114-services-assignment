import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private countertService:CounterService){}
  getAtoI(){
    return this.countertService.counterActivetoInactive;
  }
  getItoA(){
    return this.countertService.counterInactivetoActive;
  }


}
