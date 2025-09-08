import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() contactClick = new EventEmitter<Contact>();

  onItemClick(contact: Contact) {
    this.contactClick.emit(contact);
  }
}
