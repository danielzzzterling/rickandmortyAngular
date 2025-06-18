import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  searchTerm: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
}
