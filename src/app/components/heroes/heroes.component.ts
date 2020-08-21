import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInterface } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  /*Esta variable -->heroes<-- es la que será usada en el html
  porque es la que tiene la información que se quiere mostrar */
  heroes: HeroeInterface[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
