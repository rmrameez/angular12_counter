import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter';
  counter = 0;

  count(value:string){
    switch(value){
      case '+':
        this.counter++;
        break;
      case '-':
        this.counter--;
        break;
      default:
        this.counter = 0;
        break;
    }
  }
  
}
