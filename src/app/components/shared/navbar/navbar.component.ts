import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /* Métodos */
  buscarHeroe(texto: string): any {
    this.router.navigate(['/heroe/buscar', texto]);
  }
}
