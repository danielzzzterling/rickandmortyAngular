import { Component, Input, input} from '@angular/core';


@Component({
  selector: 'app-cards',
  standalone:true,
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards {
  @Input() character: any;
}
