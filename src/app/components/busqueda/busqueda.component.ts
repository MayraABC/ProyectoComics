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
  texto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params.txt;
      this.list = this.heroesService.buscarHeroes(params.txt);
    });
  }

  verHeroe(idx: number): any {
    this.router.navigate(['/heroe', idx]);
  }
}
