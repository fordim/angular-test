import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => console.log(params))
    this.route.data.subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
