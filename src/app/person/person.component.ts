import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../_models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent {
  @Input() person: Person;
  @Output() delete = new EventEmitter();

  onDeleteClick($event): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
