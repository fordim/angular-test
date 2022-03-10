import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { of } from 'rxjs';

interface IPlayer {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class PlayerResolveService implements Resolve<IPlayer> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPlayer> {
    return of({ name: 'John'});
  }
}
