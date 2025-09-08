import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './services/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  allContacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  searchTerm: string = '';
  sortType: string = 'default';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.allContacts = this.contactService.getContacts();
    this.updateFilteredContacts();
  }

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.updateFilteredContacts();
  }

  onSortChange(sortType: string) {
    this.sortType = sortType;
    this.updateFilteredContacts();
  }

  onContactClick(contact: Contact) {
    alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
  }

  updateFilteredContacts() {
    let contacts = this.allContacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    switch (this.sortType) {
      case 'name-asc':
        contacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        contacts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    this.filteredContacts = contacts;
  }
}
