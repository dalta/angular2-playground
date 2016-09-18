import { Component } from '@angular/core';

@Component({
  selector: 'fx-app',
  template: `
    <h1>My {{count}} Angular 2 App</h1> 
    <button (click)="this.increaseCount($event)">++Counter</button>
    <fx-employees></fx-employees>
    `  
})
export class AppComponent { 
  count : number = 1;

  increaseCount(event){
    console.log("increaseCount..", event)
    this.count+=1;
  }
}