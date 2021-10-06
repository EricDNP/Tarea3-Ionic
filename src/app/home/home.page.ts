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
    img: "https://lh3.googleusercontent.com/zsxA9kHp5aJ7o4oX3S-Pd3FLMZ86qep5Q8UgSRcpOH4Xlyvv2AQk7i8fFFPNBNzym5MhNkNjQtrDSeUY7RUJBvBCaYn8exWIgGFBYySZmUGDWKc5eVIn5E54nNCTKs4ST5vwU2NDpQGZ7ALdtju_OY-NcAcsshlF1j0S2F0PoatZH-r_TM_32s02qm7IVKPRcPgyxVSSW_7bLGPXXKd3qFRVWADSHT6L4xbJHbs7QeA688nTIiV-KmTNx7GD-ITpx-gSUFLz7ihdPGz2YVq3vlc1B_GEKKhKl1OyjJVgHxYL3LS36V8ytKSDxKUoJHqJGgyAwUy7P1AWXcpZE7EhXP2zC6NrKKGc6aBj3wvMIWKgett0fopT_9sz3lwpqtLz5u7E3JaXljm9WofOwCJKjGdAkLZXMQ6kV-nY0jKb-9WBoB9kxbRL-LseJYdp7r5Dtn2ewbLDDAJebDt6N1bRvcnGSeZ7rl96PLc18pQpI0wAz4nHuJQc1baiEGGtXBef7urNIuMMwXQyHTq3R6VwlUs6C4JYZ2wad_TnJ3aH9qeyGaCXCmxqeJz2g_RhazuLzNaIkYLuxk2GBCpfm7eNnQJscPmFoN-nljhxUmsnPBwU-TMeMJz74pPKEnOqnaXhuhO2lOrdLs3BAprOwcoj05LGU44KrhvltLDgHDHpq7Qic_5OzxPKdqhJdIkiJW72mPlVQCgmm9Adckisoy3yogI4=w680-h712-no?authuser=0"
  };

  constructor() { }

  ngOnInit() {
  }

}
