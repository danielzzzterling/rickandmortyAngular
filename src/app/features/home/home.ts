import { Component } from '@angular/core';
import { RamApi } from '../../core/services/ram-api';
import { Header } from '../../shared/header/header';
import { Cards } from '../../shared/cards/cards';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Header,Cards,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  implements OnInit {
  protected title = 'rick-and-morty-app';
    characters: any[] = [];
    
    constructor(private ramApi: RamApi) {}
  
    ngOnInit(): void {
        this.ramApi.getAllCharacters().subscribe((res:any)  => {
          this.characters = res.results;
          console.log(this.characters);
        });
        }
}


