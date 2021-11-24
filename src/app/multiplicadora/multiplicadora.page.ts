import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-multiplicadora',
  templateUrl: './multiplicadora.page.html',
  styleUrls: ['./multiplicadora.page.scss'],
})
export class MultiplicadoraPage implements OnInit {

  multipleArray = [];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async getMultiplicationTable(num){
    if (num == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debe ingresar un numero para calcular',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      this.multipleArray = [];
      for (let i = 0; i < 14; i++) {
        this.multipleArray.push({
          num: num,
          i: i,
          result: (i * parseInt(num))
        });
      }
    }
  }

}
