import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import {UserService} from "../../services/user.service";
import {of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let userService : UserService;
  let spy: jasmine.Spy;
  let mockUsers;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsComponent ],
      imports: [ HttpClientModule ],
      providers: [ UserService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    mockUsers = [{ name: 'John'}];
    spy = spyOn(userService, 'getUserOutside').and.returnValue(of(mockUsers));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });
});
