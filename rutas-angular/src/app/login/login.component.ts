import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  email = '';
  contrasena = '';
  name = '';
  email2 = '';
  surname = '';
  contrasena2 = '';
  contrasenaConf = '';

  ngOnInit(): void {}

  obtenerFormulario(formulario) {
    console.log(formulario);
    alert(
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.contrasena.value
    );
  }
  compararFormularios(formularios) {
    console.log(formularios);
    alert(
      'name: ' +
        formularios.controls.name.value +
        'surname: ' +
        formularios.controls.surname.value +
        'correo2: ' +
        formularios.controls.email2.value +
        'password: ' +
        formularios.controls.contrasena2.value +
        'contrasenaConf: ' +
        formularios.controls.contrasenaConf.value
    );
  }
  
}



