import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.css']
})
export class SqaureFlexComponent implements OnInit {

  @Input() divWidth = 250;
  @Input() divHeight = 100;

  constructor() { }

  ngOnInit(): void {
  }


  

}
