import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { name: 'Mark' },
    { name: 'David' },
    { name: 'Iren' },
  ];

  constructor() { }

  public getAllUsers () {
    return this.users;
  }

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add(name: string) {
    this.users.push({ name });
  }
}
