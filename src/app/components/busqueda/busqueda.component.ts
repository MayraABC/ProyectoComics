import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, HeroeInterface } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  // El arreglo de los items encontrados.
  list: HeroeInterface[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.list = this.heroesService.buscarHeroes(params.txt);
    });
  }

  ngOnInit(): void {}

  verHeroe(idx: number): any {
    console.log(idx + 'ajaaaa');
    this.router.navigate(['/heroe', idx]);
  }
}
