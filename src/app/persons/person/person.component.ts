import { Component, OnInit } from '@angular/core';
import { PersonService } from './../shared/person.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],

})
export class PersonComponent implements OnInit {

  constructor(private personService : PersonService) { }

  ngOnInit() {
  }

}
