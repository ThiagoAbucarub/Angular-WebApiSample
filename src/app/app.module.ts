import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contacts/shared/contact.service';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactComponent } from './contacts/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
