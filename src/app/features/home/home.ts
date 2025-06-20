import { Component, OnInit } from '@angular/core';
import { RamApi } from '../../core/services/ram-api';
import { Header } from '../../shared/header/header';
import { Cards } from '../../shared/cards/cards';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar";

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
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private ramApi: RamApi) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  //Llama a la API para trabajar con sus datos y mostrarlos en pantalla, guardandolos en characters (Line 17)
  loadCharacters(): void {
    this.ramApi.getAllCharacters(this.currentPage, this.searchTerm).subscribe((res: any) => {
      this.characters = res.results;
      this.totalPages = res.info.pages;
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 1;
    this.loadCharacters();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}
