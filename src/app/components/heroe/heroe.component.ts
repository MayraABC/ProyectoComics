import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  // Variable local para mostrar el dato en el template
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      /*el nombre del parámetro id es porque en el archivo app.route.ts
      le dimos el nombre de: id en el path
      { path: 'heroe/:id', component: HeroeComponent },*/
      // console.log(params.id);

      // Este heroe hace referencia a la variable creada al inicio.
      this.heroe = this.heroesService.getHeroe(params.id);
    });
  }
}
