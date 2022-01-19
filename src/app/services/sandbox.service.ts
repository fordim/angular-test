import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SandboxService {

  public x = 'Test message from service';

  constructor() { }
}
