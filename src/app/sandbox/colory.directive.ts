import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  public clickCounter: number = 0;

  @HostBinding('style.color') myColor: string;
  @HostListener('click', ['$event']) changeColor(event:any) {
    this.setRandomColor();
    this.clickCounter++;
    console.log('Click counter = ' + this.clickCounter);
  }

  public setRandomColor () {
    this.myColor = '#' + Math.floor(Math.random() * 18456789).toString(16);
  }

  constructor() {
    this.myColor = 'red';
  }

}
