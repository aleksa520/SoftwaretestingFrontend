import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from '../_models/person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
  })
export class PersonService {

  constructor(
    private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>('https://localhost:44373/api/person')
      .pipe(
        catchError(this.handleError('getPeople', []))
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${'https://localhost:44373/api/person'}/${id}`;
    return this.http.get<Person>(url).pipe(
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>('https://localhost:44373/api/person', person, httpOptions).pipe(
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  deletePerson(person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.personId;
    const url = `${'https://localhost:44373/api/person'}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put('https://localhost:44373/api/person', person, httpOptions).pipe(
      catchError(this.handleError<any>('return'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}