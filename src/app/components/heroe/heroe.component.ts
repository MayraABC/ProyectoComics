import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  // Variable
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      /*el nombre del parámetro id es porque en el archivo app.route.ts
      le dimos el nombre de: id en el path
      { path: 'heroe/:id', component: HeroeComponent },*/
      // console.log(params.id);

      // Este heroe hace referencia a la variable creada al inicio.
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }
}
