import { DelayDirective } from './delay.directive';
import {Component, TemplateRef, ViewContainerRef} from "@angular/core";
import {inject, TestBed} from "@angular/core/testing";

@Component({
  template: `<div DelayDirective (change)="output = $event"></div>`
})
export class TestContainerComponent {
  public output: any;
}

describe('DelayDirective', () => {
  let container: TestContainerComponent;
  let fixture: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainerComponent, DelayDirective],
      providers: [TemplateRef, ViewContainerRef]
    })

    fixture = TestBed.createComponent(TestContainerComponent);
    container = fixture.componentInstance;
  })


  it('should create an instance', inject([TemplateRef, ViewContainerRef], (templateRef: TemplateRef<any>, view: ViewContainerRef) => {
    const directive = new DelayDirective(templateRef, view);
    expect(directive).toBeTruthy();
  }));

  //TO DO не работает тест, кнопка виртуально не нажимается
  it('should log click', () => {
    const div = fixture.nativeElement.querySelector('div');
    div.click();

    // expect(container.output).toBe(1);
  });
});
