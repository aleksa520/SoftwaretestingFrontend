import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {
  people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople()
    .subscribe(people => this.people = people);
  }

  add(name: string, strength: number): void {
    name = name.trim();
    let person = new Person();
    person.firstName = name;
    if (!name) { return; }
    this.personService.addPerson(person)
      .subscribe(person => {
        this.people.push(person);
      });
  }

  delete(person: Person): void {
    this.people = this.people.filter(h => h !== person);
    this.personService.deletePerson(person).subscribe();
  }
}