import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  valorAutocomplete = '';
  sugerencias = ['kevin', 'cachetes', 'orlando'];
  constructor() {}

  ngOnInit(): void {}

  buscarSugerencia(evento) {}
}