import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profileData = {
    nombre: 'Eric', 
    apellido: "De la Nuez", 
    correo: "delanuezeric@gmail.com", 
    img: "assets/img/foto.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

}
