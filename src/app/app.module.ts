import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";
import { SandboxComponent } from './sandbox/sandbox.component';
import { UserCardComponent } from './sandbox/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    ListComponent,
    SandboxComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
