import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiacoo',
  templateUrl: './zodiacoo.component.html',
  styleUrls: ['./zodiacoo.component.css']
})
export class ZodiacooComponent {
  nombre: string = '';
  paterno: string = '';
  materno: string = '';
  dia: number | undefined;
  mes: number | undefined;
  anio: number | undefined; 
  sexo: string = '';
  edad: number | undefined;
  signoSeleccionado: { signo: string, imagenUrl: string } | undefined;

  // Lista de signos y URLs de imágenes
  signosChinos = [
    { signo: 'Rata',
      imagenUrl: 'https://img.freepik.com/vector-premium/ano-nuevo-chino-2023-signo-zodiaco-rata-sobre-fondo-color-rojo_692702-8588.jpg' },
    { signo: 'Buey',
      imagenUrl: 'https://st2.depositphotos.com/1036970/43961/v/950/depositphotos_439610014-stock-illustration-chinese-zodiac-sign-year-chinese.jpg' },
    { signo: 'Tigre', 
      imagenUrl: 'https://img.freepik.com/vector-premium/tigre-signo-zodiaco-chino-nuevo-ano-2022-traduccion-texto-extranjero-como-tigre_8087-4976.jpg?w=2000' },
    { signo: 'Conejo', 
      imagenUrl: 'https://img.freepik.com/vector-premium/ano-conejo-horoscopo-chino-zodiaco-animal_692702-8577.jpg' },
    { signo: 'Dragón', 
      imagenUrl: 'https://img.freepik.com/vector-premium/feliz-ano-nuevo-chino-2024-signo-zodiacal-dragon_38689-4592.jpg' },
    { signo: 'Serpiente', 
      imagenUrl: 'https://i.pinimg.com/originals/e1/97/5d/e1975dbef9f46095c1bdfc6c12195d8a.jpg' },
    { signo: 'Caballo', 
      imagenUrl: 'https://assets.wemystic.com/wmcom/2020/10/Depositphotos_29601077_l-2015-963x1024.jpg' },
    { signo: 'Cabra', 
      imagenUrl: 'https://t4.ftcdn.net/jpg/01/01/46/63/500_F_101466330_jVNvupu6WP9xDXMnJKsJjyTPjPdgYac8.jpg' },
    { signo: 'Mono', 
      imagenUrl: 'https://assets.wemystic.com/wmcom/2020/10/Depositphotos_29601189_l-2015-963x1024.jpg' },
    { signo: 'Gallo', 
      imagenUrl: 'https://cdn3.uvnimg.com/5d/74/d8506973416aaf86e7d4f1b5517b/1.jpg' },
    { signo: 'Perro', 
      imagenUrl: 'http://cdn2.uvnimg.com/50/a1/8121d0914c70884f5e3d03a87a6c/1.jpg' },
    { signo: 'Cerdo', 
      imagenUrl: 'https://assets.wemystic.com/wmcom/2020/10/Depositphotos_29601257_l-2015-963x1024.jpg' }
  ];

  calcularZodiaco() {
    if (this.dia && this.mes && this.anio) {

      // Calcular la edad
      const hoy = new Date();
      const nacimiento = new Date(this.anio, this.mes - 1, this.dia);
      this.edad = hoy.getFullYear() - nacimiento.getFullYear();
      const mesDif = hoy.getMonth() - nacimiento.getMonth();
      if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < nacimiento.getDate())) {
        this.edad--;
      }

      // Calcular el signo zodiacal chino
      const añoNacimiento = this.anio ? this.anio : new Date().getFullYear();
      const signoIndex = (añoNacimiento - 4) % 12;
      this.signoSeleccionado = this.signosChinos[signoIndex];
    } else {

      // Si los datos no son válidos
      alert('Por favor, introduce una fecha de nacimiento válida.');
    }
  }
}


