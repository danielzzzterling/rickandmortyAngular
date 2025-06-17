import { Component, Input, input} from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cards',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards {
  @Input() character!: any;}
