import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay:any;

  @Output() changes = new EventEmitter<number>();
  private _counter = 0;

  @HostListener('click') onClick() {
    this._counter++;
    this.changes.emit(this._counter);
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelay * 1000)
  }
}
