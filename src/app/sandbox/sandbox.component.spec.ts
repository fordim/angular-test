import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxComponent } from './sandbox.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {ComponentFactoryResolver, ViewContainerRef} from "@angular/core";
import {SandboxService} from "../services/sandbox.service";

describe('SandboxComponent', () => {
  let component: SandboxComponent;
  let fixture: ComponentFixture<SandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxComponent ],
      imports: [ HttpClientModule ],
      providers: [ UserService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TO FIX
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
