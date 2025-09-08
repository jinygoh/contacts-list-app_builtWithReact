import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app';
import { ContactItemComponent } from './components/contact-item/contact-item';
import { ContactListComponent } from './components/contact-list/contact-list';
import { SearchBarComponent } from './components/search-bar/search-bar';

import { ContactService } from './services/contact';

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactListComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
