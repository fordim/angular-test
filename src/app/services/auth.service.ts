import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuth() {
    //Например отправка запроса на сервер, за авторизацией
    return of(true);
  }
}
