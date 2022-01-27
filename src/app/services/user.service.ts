import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { name: 'Mark' },
    { name: 'David' },
    { name: 'Iren' },
  ];

  constructor(
    private _http: HttpClient
  ) {

  }

  public getAllUsers () {
    return this.users;
  }

  public getUserOutside () {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public remove(name: string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add(name: string) {
    this.users.push({ name });
  }
}
