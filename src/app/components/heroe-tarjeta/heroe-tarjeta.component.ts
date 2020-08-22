import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  // variables
  /* El decorador Input me dice que la información puede llegar desde fuera */
  @Input() itemHeroe: any = {};
  @Input() idx: number;

  /* Variable que enviará la información */
  @Output() heroeSeleccionado: EventEmitter<number>;

  // constructor
  constructor(private router: Router) {
    // heroeSeleccionado, funcionará como un evento, por ejemplo el 'click'
    this.heroeSeleccionado = new EventEmitter();
  }

  // Métodos
  ngOnInit(): void {}

  verHeroe(): any {
    this.router.navigate(['/heroe', this.idx]);
    /* Ejemplo como sería con el decorador Output Emite, envia, el valor al padre. */
    // this.heroeSeleccionado.emit(this.idx);
  }
}
