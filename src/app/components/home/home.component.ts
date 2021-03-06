import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  API_URL: string = environment.apiUrl;
  constructor() {}

  ngOnInit(): void {}
}
