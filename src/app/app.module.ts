import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from "@angular/forms";
import { SandboxComponent } from './sandbox/sandbox.component';
import { UserCardComponent } from './sandbox/user-card/user-card.component';
import { ColoryDirective } from './sandbox/colory.directive';
import { DelayDirective } from './sandbox/delay.directive';
import { ItemComponent } from './sandbox/item/item.component';
import { UserService } from "./services/user.service";
import { StudentsComponent } from './sandbox/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    ListComponent,
    SandboxComponent,
    UserCardComponent,
    ColoryDirective,
    DelayDirective,
    ItemComponent,
    StudentsComponent
  ],
  entryComponents: [ ItemComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
