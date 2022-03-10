import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private params:any;
  public playedId:number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params))
    this.route.params.subscribe((params: any) => this.params = params)
    this.playedId = this.params.playerId
  }

  ngOnInit(): void {
  }

}
