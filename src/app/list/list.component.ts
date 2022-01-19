import {Component, OnInit} from '@angular/core';
import {LogicService} from "../services/logic.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users = ['Mark', 'Dave', 'Tramp', 'Markus'];

  public user: string = '';

  constructor(private logicService: LogicService) {

  }

  ngOnInit(): void {
    this.updateUsers();
  }

  public submit (form:any) {
    // console.log("Form submitted", form)
  }

  public addMember (user:string) {
    console.log("Add user to array" + user);

    if (user === '') {
      console.log('Dont have name');
      return;
    }

    let users = window.localStorage.getItem('users');

    if (users !== null) {
      const usersArray = users.split(",");

      if (usersArray.includes(user)) {
        console.log('User already exist');
        return;
      }
    }

    this.users.push(user);
    this.updateUsers();
  }

  public deleteMember (user:string) {
    console.log("delete user to array" + user);

    if (user === '') {
      console.log('Dont have name');
      return;
    }

    let users = window.localStorage.getItem('users');

    if (users === null) {
      console.log('Dont have any users');
      return;
    }

    const usersArray = users.split(",");

    if (!usersArray.includes(user)) {
      console.log('User do not exist');
      return;
    }

    this.users = usersArray.filter(function (value) {
      return value !== user;
    });

    this.updateUsers();
  }

  public updateUsers () {
    return window.localStorage.setItem('users', this.users.join());
  }
}
