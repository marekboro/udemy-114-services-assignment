import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CounterService {
    counterActivetoInactive = 0;
    counterInactivetoActive = 0;

    increaseActiveToInactiveCount(){
        this.counterActivetoInactive++;
    }
    increaseInactiveToActiveCount(){
        this.counterInactivetoActive++;
    }

}