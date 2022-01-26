import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user:any;
  @Input('name') name:any;
  @Output('nameSelected') nameSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectName() {
    console.log('Selected name ' + this.name);
    this.nameSelected.emit();
  }
}
