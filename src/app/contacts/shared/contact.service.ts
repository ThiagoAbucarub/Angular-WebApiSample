import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {

  // contact : Contact;
   contactList : Contact[];
  
  constructor(private http : Http) { }

  getContactList(){
    this.http.get('http://localhost:52188/WebApiSample/Person/GetAll')
    .map((data : Response) => {
      return data.json() as Contact[];
    }).toPromise().then( x => {
      this.contactList = x;
    })
  }

}
