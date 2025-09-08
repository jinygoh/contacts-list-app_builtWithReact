import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.html',
  styleUrls: ['./contact-item.css']
})
export class ContactItemComponent {
  @Input() contact!: Contact;
  @Output() itemClick = new EventEmitter<Contact>();

  onClick() {
    this.itemClick.emit(this.contact);
  }
}
