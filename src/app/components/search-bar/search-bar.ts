import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent {
  @Output() searchTermChange = new EventEmitter<string>();

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTermChange.emit(target.value);
  }
}
