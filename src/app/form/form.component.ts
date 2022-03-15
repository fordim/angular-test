import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nameControl!: FormControl;
  public fullNameControl!: FormGroup;
  public userListControl!: FormGroup;
  public userList!: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nameControl = new FormControl('John', [Validators.required, myValidator(3)], []);
    this.nameControl.valueChanges.subscribe((value => console.log(value)));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });

    this.fullNameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });

    this.fullNameControl.valueChanges.subscribe((value => console.log(value)));

    // Аналогичная запись, ниже через formBuilder более читабельная
    // this.userListControl = new FormGroup({
    //   users: new FormArray([
    //     new FormControl('Alice'),
    //     new FormControl('Jack'),
    //     new FormControl('Mark'),
    //   ])
    // });

    this.userListControl = this.formBuilder.group({
      users: this.formBuilder.array([ ['Alice'], ['Jack'], ['Mark'] ])
    })

    this.userList = (this.userListControl.get('users') as FormArray);
  }

  removeUserControl(index: number): void {
    this.userList.removeAt(index);
  }

  addUserControl(): void {
    this.userList.controls.push(new FormControl(''));
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

function myValidator(number: number) {
  return function (formControl: FormControl) {
    if (formControl.value.length < number) {
      console.log('here');
      return { myValidator: { message: 'Something'} };
    }

    return null;
  }
}

