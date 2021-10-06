import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  total: any;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async calculateSum(num1, num2){
    if (num1 == "" || num2 == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debe ingresar ambos numeros para calcular',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      this.total = parseInt(num1) + parseInt(num2);
    }
  }

}
