import {fakeAsync, flush, inject, TestBed, tick} from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum', () => {
    expect(service.sum(9,5)).toBe(14);
  });

  it('should return sumAsync', <any>fakeAsync((): void => {
    service.sumAsync(9,5).then( result => {
      expect(result).toEqual(14);
    });

    flush();
  }));

  it('looks async but is synchronous', <any>fakeAsync((): void => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(true);
  }));
});
