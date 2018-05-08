import { Component } from '@angular/core';
import { Situation } from '../situation.model';



@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css']
})
export class Scenario1Component {
  situation: Situation[] = [
    new Situation("Lion", "right", 1),
    new Situation("Zebra", "left", 2)

  ];

  constructor() { }



}
