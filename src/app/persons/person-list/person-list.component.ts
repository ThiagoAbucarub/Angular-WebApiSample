import { Component, OnInit } from '@angular/core';

import { PersonService } from '../shared/person.service';
import { Person } from '../shared/person.model';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPersonList();
  }

}