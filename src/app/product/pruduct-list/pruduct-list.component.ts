import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './pruduct-list.component.html',
  styleUrl: './pruduct-list.component.css'
})
export class PruductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=" ";
  mostrarImagen(): void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":2000,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenUrl": "https://img.remediosdigitales.com/d2db46/nissan-v-drive_/1366_2000.jpg"
    },
      {
      "ProductoId":2,
      "Modelo":"Rio",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2024",
      "Precio":4000,
      "Marca":"Ford",
      "Color":"blanco",
      "ImagenUrl": "https://s1.1zoom.me/b5349/962/KIA_Rio_Light_Blue_White_background_526267_3840x2160.jpg"
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":4500,
      "Marca":"Dodge",
      "Color":"negro",
      "ImagenUrl": "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2019-aveo/colorizer/01-images/azul-oceano.jpg?imwidth=1200"
    },
  ]
}

