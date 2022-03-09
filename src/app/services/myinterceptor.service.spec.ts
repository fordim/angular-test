import { TestBed } from '@angular/core/testing';

import { MyInterceptor } from './myinterceptor.service';

describe('MyInterceptor', () => {
  let service: MyInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
