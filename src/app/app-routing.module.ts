import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { ListComponent } from "./list/list.component";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { HomeComponent } from "./home/home.component";
import { PlayersComponent } from "./players/players.component";
import { PlayerComponent } from "./player/player.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent},
  { path: 'list', component: ListComponent},
  { path: 'sandbox', component: SandboxComponent},
  { path: 'players',
    data: {
      title: 'Players',
      anotherParam: 'Something Else'
    },
    component: PlayersComponent
  },
  { path: 'player/:playerId', component: PlayerComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
