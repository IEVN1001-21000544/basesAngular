import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './pruduct-list.component.html',
  styleUrl: './pruduct-list.component.css'
})
export class PruductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen(): void{
    this.muestraImg=!this.muestraImg
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":"2000",
      "Color":"Azul",
      "ImagenUrl": "https://mx.images.search.yahoo.com/images/view;_ylt=Awrih2RV4OxmVTYhC0vF8Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNhY2M3NWJlMzZhNmZjM2NhZGMxNzBmYzllYTc5YzBjBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fmx.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bcarros%26type%3DE210MX1274G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1920&h=1080&imgurl=sites.google.com%2Fsite%2Fimagenesdecarrosgratis%2F_%2Frsrc%2F1421516636272%2Fhome%2Fcarros-deportivos-lamborghini-aventador-tron_aventador.jpg&rurl=https%3A%2F%2Fsites.google.com%2Fsite%2Fimagenesdecarrosgratis%2F&size=220.4KB&p=imagenes+de+carros&oid=3acc75be36a6fc3cadc170fc9ea79c0c&fr2=piv-web&fr=mcafee&tt=imagenes+de+carros&b=0&ni=21&no=1&ts=&tab=organic&sigr=jpViu4INEyks&sigb=8x_62gZGGSr3&sigi=RUWFcvsu_up0&sigt=e9pTjTyX8Auv&.crumb=Eri69jakzVV&fr=mcafee&fr2=piv-web&type=E210MX1274G0"
    },
    {
      "ProductoId":2,
      "Modelo":"Rio",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2024",
      "Precio":"4000",
      "Color":"blanco",
      "ImagenUrl": "https://mx.images.search.yahoo.com/images/view;_ylt=Awrih2RV4OxmVTYhDUvF8Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzI1ODFlNDZkYzEyMzYyNGEwMGJmMTViNjM2OTRlNDg5BGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fmx.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bcarros%26type%3DE210MX1274G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=7139&h=4190&imgurl=static.pexels.com%2Fphotos%2F63763%2Fpexels-photo-63763.jpeg&rurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fcar-cars-lamborghini-aventador-luxury-car-63763%2F&size=4667.9KB&p=imagenes+de+carros&oid=2581e46dc123624a00bf15b63694e489&fr2=piv-web&fr=mcafee&tt=Free+stock+photo+of+car%2C+cars%2C+Lamborghini+Aventador&b=0&ni=21&no=3&ts=&tab=organic&sigr=zW..flPRr4wn&sigb=xKLDAuNWeVSr&sigi=eOLStz9JYIeo&sigt=Do1BANpP9U6C&.crumb=Eri69jakzVV&fr=mcafee&fr2=piv-web&type=E210MX1274G0"
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":"4500",
      "Color":"negro",
      "ImagenUrl": "https://mx.images.search.yahoo.com/images/view;_ylt=Awrih2RV4OxmVTYhEkvF8Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFiMzk4MjQzNmZhMzUzNDdjYmVlY2QwYzZiM2I2OWE0BGdwb3MDOARpdANiaW5n?back=https%3A%2F%2Fmx.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bcarros%26type%3DE210MX1274G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D8&w=1600&h=900&imgurl=4.bp.blogspot.com%2F-_18AElD7MMo%2FUofarY9HYBI%2FAAAAAAAACIs%2FDT89R-NObB0%2Fs1600%2Fimagenes%2Ben%2BHD%2B%2825%29.jpg&rurl=http%3A%2F%2Fimagenesdecarroslujosos.blogspot.com%2F2015%2F08%2Fimagenes-de-carros-fotos-de-carros.html&size=290.5KB&p=imagenes+de+carros&oid=1b3982436fa35347cbeecd0c6b3b69a4&fr2=piv-web&fr=mcafee&tt=IM%C3%81GENES+DE+CARROS+LUJOSOS+%3A+IM%C3%81GENES+DE+CARROS+-+FOTOS+DE+CARROS+...&b=0&ni=21&no=8&ts=&tab=organic&sigr=fF4v2pUDyzem&sigb=P1nHPDraNCbT&sigi=PVKNlNbEVBIj&sigt=rJsDiy4qXE.C&.crumb=Eri69jakzVV&fr=mcafee&fr2=piv-web&type=E210MX1274G0"
    },
  ]
}

