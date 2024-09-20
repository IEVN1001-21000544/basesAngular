import { Component } from '@angular/core';

@Component({
  selector: 'app-pruduct-list',
  templateUrl: './pruduct-list.component.html',
  styleUrl: './pruduct-list.component.css'
})
export class PruductListComponent {

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":"2000",
      "Color":"Azul",
      "ImagenUrl": ""
    },
    {
      "ProductoId":2,
      "Modelo":"Rio",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2024",
      "Precio":"4000",
      "Color":"blanco",
      "ImagenUrl": ""
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":"4500",
      "Color":"negro",
      "ImagenUrl": ""
    },
  ]
}

