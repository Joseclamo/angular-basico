import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent /*implements OnInit*/ {
  // constructor() { 
  //   console.log('constructor');
  //  }
  //  // NgOnInit: Inicializar cosas, hacer peticiones a servicios y eso
  // ngOnInit(): void {
  //   console.log('on init');
  // }
  heroes: string[] = ['spiderman', 'capitan', 'ironman', 'hulk', 'goku']
  heroeBorrado: string = ''; 

  borrarHeroe():void {
    console.log('borar');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
