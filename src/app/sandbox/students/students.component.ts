import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students = [
    { name: 'one'},
    { name: 'two'}
  ];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    //for example
    this._userService.getUserOutside().subscribe((data: any) => console.log(data));

    this._userService.getUserOutside().subscribe((students: any) => this.students = students);
  }

  someMethod(): void {
    this._userService.getUserOutside().subscribe((users: any) => this.students = users);
  }

}
