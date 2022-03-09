import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public playerId: number = 15;

  constructor() { }

  public action (event:any) {
    console.log('testOne');
    console.log(event.target);
  }

  ngOnInit(): void {
  }

}
