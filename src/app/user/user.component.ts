import { Component, OnInit } from '@angular/core';
import { LogicService } from "../services/logic.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  public x = 5;

  public y = 10;

  public yTwo = 0;

  constructor(
    private logicService: LogicService,
    private _http: HttpClient
  ) {
    _http.get('https://api.github.com/search/users').subscribe(results => {
      console.log(results);
    })
  }

  ngOnInit(): void {
    this.logicService.test();
    this.logicService.check();

    this.y = this.logicService.y;

    this.yTwo = this.logicService.yTwo();
  }
}
