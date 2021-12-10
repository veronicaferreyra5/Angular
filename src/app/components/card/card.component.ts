import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() imagen = "assets/images/sami.jpg";
  @Input() categoria?: string;
  @Input() titulo = "Falta titulo";
  @Input() ofertaInfalible = false;
  @Input() precio = 1234;


  ngOnInit(): void {
  }

}
