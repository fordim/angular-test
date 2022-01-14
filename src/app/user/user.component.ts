import { Component, OnInit } from '@angular/core';
import {LogicService} from "../logic.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  public x = 5;

  public y = 10;

  public yTwo = 0;

  constructor(private logicService: LogicService) { }

  ngOnInit(): void {
    this.logicService.test();
    this.logicService.check();

    this.y = this.logicService.y;

    this.yTwo = this.logicService.yTwo();


  }
}
