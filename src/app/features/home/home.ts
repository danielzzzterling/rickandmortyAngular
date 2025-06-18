import { Component, OnInit } from '@angular/core';
import { RamApi } from '../../core/services/ram-api';
import { Header } from '../../shared/header/header';
import { Cards } from '../../shared/cards/cards';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar"; // <-- importante

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Cards, CommonModule, FormsModule, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  characters: any[] = [];
  searchTerm: string = '';

  constructor(private ramApi: RamApi) {}
  

  ngOnInit(): void {
    this.loadCharacters(); 
  }

  loadCharacters(page: number = 1): void {
    this.ramApi.getAllCharacters(page, this.searchTerm).subscribe((res: any) => {
      this.characters = res.results;
    });
  }

  onSearch(term: string): void {
  this.searchTerm = term;
  this.loadCharacters();
}
} 

