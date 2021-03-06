import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PersonDetailComponent }  from './person-detail/person-detail.component';
import { PeopleComponent }      from './people/people.component';
import { PersonSearchComponent }  from './person-search/person-search.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PeopleComponent,
    PersonDetailComponent,
    PersonSearchComponent,
    PersonComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
