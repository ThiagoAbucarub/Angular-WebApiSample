import { Component, OnInit } from '@angular/core';

import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  ngOnInit() {
    this.contactService.getContactList();
  }

}
