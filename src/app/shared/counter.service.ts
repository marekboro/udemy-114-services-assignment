import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CounterService {
    counter: number = 0;

    addCount(){
        this.counter++;
        // console.log("addCount ran " + this.counter)
    }
    getCount():number{
        return this.counter;
    }

}