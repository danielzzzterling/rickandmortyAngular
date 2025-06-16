import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RamApi } from './core/services/ram-api';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar';
import { Cards } from './shared/cards/cards';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,NavbarComponent,Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'rick-and-morty-app';
    characters: any[] = [];
    
    constructor(private rmService: RamApi) {}
  
    ngOnInit(): void {
        this.rmService.getAllCharacters().subscribe(data => {
          this.characters = data.results;
        });
        }
}