import { Component, OnInit } from '@angular/core';
import {SandboxService} from "../services/sandbox.service";
import {interval, map, Observable} from "rxjs";

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

  public users = [
    {name: 'Mark'},
    {name: 'David'},
    {name: 'Iren'},
  ];

  public names = ['Dimity', 'Max', 'Selena'];

  public selectedName:any;

  constructor(private sandboxService: SandboxService) {
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
  }

  public changeColor(color: string) {
    if (this.myColor === color) {
      this.myColor = 'red';
      return;
    }

    this.myColor = color;
  }

}
