import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { ListComponent } from "./list/list.component";
import {SandboxComponent} from "./sandbox/sandbox.component";

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'list', component: ListComponent},
  { path: 'sandbox', component: SandboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
