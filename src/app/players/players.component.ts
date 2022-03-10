import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public playerName: any;

  constructor(private route: ActivatedRoute, private _router: Router) {
    this.route.queryParams.subscribe(params => console.log(params))
    this.route.data.subscribe(data => console.log(data))

    this.route.data.subscribe((data:any) => this.playerName = data.player.name)

    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }
    })
  }

  ngOnInit(): void {
  }

  goToPlayer(playerId:number) {
    this._router.navigate(['player', playerId]);
    //Same method
    // this._router.navigateByUrl('player/' + playerId, {skipLocationChange : true});
  }
}
