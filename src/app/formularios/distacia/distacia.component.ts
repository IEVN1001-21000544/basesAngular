import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-distacia',
  templateUrl: './distacia.component.html',
  styleUrl: './distacia.component.css'
})
export class DistaciaComponent {

  formulario!:FormGroup;
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario=new FormGroup({
      numerox1: new FormControl('',Validators.required),
      numerox2: new FormControl('',Validators.required),
      numeroy1: new FormControl('',Validators.required),
      numeroy2: new FormControl('',Validators.required)
    });
  }
  distanciaNumeros():void{
    const numerox1=this.formulario.get('numerox1')?.value;
    const numerox2=this.formulario.get('numerox2')?.value;
    const numeroy1=this.formulario.get('numeroy1')?.value;
    const numeroy2=this.formulario.get('numeroy2')?.value;
    
    this.resultado=Math.sqrt((numerox2-numerox1)*(numerox2-numerox1) +(numeroy2-numeroy1) * (numeroy2-numeroy1));
  }

}
