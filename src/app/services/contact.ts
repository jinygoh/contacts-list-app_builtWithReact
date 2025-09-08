import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Alice Smith', phone: '555-0101', email: 'alice.smith@example.com' },
    { id: 2, name: 'Bob Johnson', phone: '555-0102', email: 'bob.johnson@example.com' },
    { id: 3, name: 'Charlie Brown', phone: '555-0103', email: 'charlie.brown@example.com' },
    { id: 4, name: 'Diana Prince', phone: '555-0104', email: 'diana.prince@example.com' },
    { id: 5, name: 'Ethan Hunt', phone: '555-0105', email: 'ethan.hunt@example.com' }
  ];

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
