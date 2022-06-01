import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  counter = 0;
  @Input() step:number = 1;
  @Output() numberChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  decrease (){
    console.log("Hey Decrease");
    if(this.counter - this.step > 0){
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase(){
    console.log("Hey Increase");
    if(this.counter + this.step < 100){
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }

}
