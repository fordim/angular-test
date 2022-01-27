import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {SandboxService} from "../services/sandbox.service";
import {interval, map, Observable} from "rxjs";
import {ItemComponent} from "./item/item.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  public myClass = 'red'

  public myColor = 'red';

  public test: Observable <number>|undefined;

  public x:string = '';

  public user:any;

  public isShown:boolean = true;

  public users:any;

  public names = ['Dimity', 'Max', 'Selena'];

  public selectedName:any;

  //old type of injection service
  private _userService:any;

  constructor(
    private sandboxService: SandboxService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver : ComponentFactoryResolver,
    private userService: UserService
  ) {
    //old type of injection service
    this._userService = userService;

    setTimeout(() =>{
      this.myClass = 'green'

      this.user = {
        name: 'John'
      };

      setTimeout(() =>{
        this.myClass = 'blue'
      }, 2000)
    }, 2000)

    this.x = this.sandboxService.x;
  }

  ngOnInit(): void {
    this.test = interval(1000).pipe(map(i => i));

    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
      const componetnRef = this.viewContainerRef.createComponent(componentFactory);
    }, 3000)

    this.users = this._userService.getAllUsers();
  }

  public changeColor(color: string) {
    if (this.myColor === color) {
      this.myColor = 'red';
      return;
    }

    this.myColor = color;
  }

  public removeUser(name: string) {
    console.log(name);
    this._userService.remove(name);
    this.users = this._userService.getAllUsers();
  }

  public addUser(name: string) {
    if (!name) {
      return;
    }

    this._userService.add(name);
  }

}
