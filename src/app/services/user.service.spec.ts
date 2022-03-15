import {inject, TestBed} from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of users', inject ([UserService, HttpTestingController], (service: UserService, backend: HttpTestingController) => {
    const mockUsers = [
      { name: 'Mark' },
      { name: 'David' },
      { name: 'Iren' },
    ];

    service.getUserOutside().subscribe(users => {
      expect(users).toEqual(mockUsers)
    })

    backend.expectOne({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).flush(mockUsers);
  }));
});
