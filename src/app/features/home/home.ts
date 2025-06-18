import { Component, OnInit } from '@angular/core';
import { RamApi } from '../../core/services/ram-api';
import { Header } from '../../shared/header/header';
import { Cards } from '../../shared/cards/cards';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- importante
import { NavbarComponent } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Cards, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  characters: any[] = [];
  searchTerm: string = '';

  constructor(private ramApi: RamApi) {}
  

  ngOnInit(): void {
    this.loadCharacters(); // Carga inicial
  }

  loadCharacters(page: number = 1): void {
    this.ramApi.getAllCharacters(page, this.searchTerm).subscribe((res: any) => {
      this.characters = res.results;
    });
  }

  onSearch(): void {
    this.loadCharacters(); // Usa el valor actual de searchTerm
  }
}

