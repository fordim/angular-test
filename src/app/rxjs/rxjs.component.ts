import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {combineLatest, debounceTime, fromEvent, map, Observable, of, pipe, tap} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, AfterViewInit {
  @ViewChild('one') input : any;

  test$: any;
  check: string = '';

  one$: Observable<any>;
  two$: Observable<any>;
  tree$: Observable<any>;
  five$: Observable<any>;
  public four: number = 0;
  seven: Observable<any>;
  six$: Observable<any>;

  constructor(private elementRef: ElementRef) {
    this.one$ = of(2);
    this.five$ = of(6);
    this.two$ = this.one$.pipe();
    this.tree$ = this.two$.pipe(
      tap (() => {
        console.log('check');
      })
    );
    this.tree$.pipe().subscribe((data) => this.four = data);
    this.six$ = combineLatest([this.one$, this.five$]);
    this.seven = this.six$.pipe(
      map(([a, b]) => {
        return a * b;
      })
    );
  }

  // map, switchMap - переключает контент, filter, combineLatest, of, tap - не изменяет поток

  ngOnInit(): void {
    this.test$ = fromEvent(this.elementRef.nativeElement, 'input').pipe(debounceTime(500),
      map((data: any) => {
        console.log(data.target.value);
        return data.target.value;
      })
    ).subscribe(response => this.check = response);
  }

  ngAfterViewInit(): void {
    this.test$ = fromEvent(this.input.nativeElement, 'input').pipe(
      map((data: any) => {
        console.log(data.target.value);
        return data.target.value;
      })
    ).subscribe(response => this.check = response);
  }
}
