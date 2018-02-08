import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Person } from './person.model';

@Injectable()
export class PersonService {

  // person : Person;
   personList : Person[];
  
  constructor(private http : Http) { }

  getPersonList(){
    this.http.get('http://localhost:52188/WebApiSample/Person/GetAll')
    .map((data : Response) => {
      return data.json() as Person[];
    }).toPromise().then( x => {
      this.personList = x;
    })
  }

}
