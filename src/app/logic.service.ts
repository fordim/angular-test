import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  public y = 7;

  constructor() {

  }

  public test () {
    console.log('Privet')
  }

  public yTwo () {
    return 5;
  }

  public check () {
    window.localStorage.setItem('test', '10');
  }
}
