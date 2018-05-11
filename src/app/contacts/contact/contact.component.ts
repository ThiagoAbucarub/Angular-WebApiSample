import { Component, OnInit } from '@angular/core';
import { ContactService } from './../shared/contact.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

}
