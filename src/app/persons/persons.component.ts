import { Component, OnInit } from '@angular/core';

import { PersonService } from './shared/person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService]
})
export class PersonsComponent implements OnInit {

  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPersonList();
  }

}
