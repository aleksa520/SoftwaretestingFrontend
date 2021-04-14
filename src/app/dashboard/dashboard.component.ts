import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people.slice(1, 5));
  }
}
