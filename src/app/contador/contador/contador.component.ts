import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo</h1>
      <h1>{{title}}</h1>
      <h1>{{1+1}}</h1>

      <h3>La base es <strong>{{base}}</strong></h3>

      <button (click)="acumular(base)">+{{base}}</button>

      <span>{{numero}}</span>

      <button (click)="acumular(-base)">-{{base}}</button>
      <!-- <button (click)="acumular(base*-1)">-{{base}}</button> -->
  `
})
export class ContadorComponent {
  title: string = 'Contador app';
  numero: number = 10;
  base: number = 5;


  acumular(valor: number) {
    this.numero += valor;
  }
}