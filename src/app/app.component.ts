import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pratice';
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';

  testClick(){
    console.log("Test EventBinding");
  }

  testNumberChange(value:number){
    console.log("Test NumberChange from app action bar :"+value)
  }
}
