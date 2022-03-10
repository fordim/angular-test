import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nameControl!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.nameControl = new FormControl('John', [Validators.required, myValidator(3)]);
    this.nameControl.valueChanges.subscribe((value => console.log(value)));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });
  }
}

//Doesn't work
function myAsycValidator(formControl: FormControl): Observable<null | any> {
  if (formControl.value.length < 3) {
    console.log(of({ myValidator: { message: 'Something'} }));
    return of({ myValidator: { message: 'Something'} });
  }

  console.log(of(null));
  return of(null);
}

function myValidator(number:number) {
  return function (formControl: FormControl) {
    if (formControl.value.length < number) {
      console.log('here');
      return { myValidator: { message: 'Something'} };
    }

    return null;
  }
}

