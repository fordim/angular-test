import { TestBed } from '@angular/core/testing';

import { PlayerResolveService } from './player-resolve.service';

describe('PlayerResolveService', () => {
  let service: PlayerResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
