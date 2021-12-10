import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wapper',
  templateUrl: './card-wapper.component.html',
  styleUrls: ['./card-wapper.component.scss']
})
export class CardWapperComponent implements OnInit {

  tarjetas =[
    {
    imagen: "assets/images/sami.jpg",
    categoria: "Vuelo",
    titulo: "Viajá a París",
    ofertaInfalible: true,
    precio: 33264823 
    },
    {
    imagen: "assets/images/sami.jpg",
    categoria: "Hotel",
    titulo: "Viajá a Medellín",
    ofertaInfalible: false,
    precio: 332, 
    },
    {
    imagen: "assets/images/sami.jpg",
    categoria: "Paquete",
    titulo: "Viajá a Colombia",
    ofertaInfalible: false,
    precio: 33264,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
