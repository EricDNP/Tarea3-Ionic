import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  private unitNums: NumData[] = [
    {
      num: 1,
      letter: "uno"
    },
    {
      num: 2,
      letter: "dos"
    },
    {
      num: 3,
      letter: "tres"
    },
    {
      num: 4,
      letter: "cuatro"
    },
    {
      num: 5,
      letter: "cinco"
    },
    {
      num: 6,
      letter: "seis"
    },
    {
      num: 7,
      letter: "siete"
    },
    {
      num: 8,
      letter: "ocho"
    },
    {
      num: 9,
      letter: "nueve"
    }
  ]

  private uniqNums: NumData[] = [
    {
      num: 10,
      letter: "diez"
    },
    {
      num: 11,
      letter: "once"
    },
    {
      num: 12,
      letter: "doce"
    },
    {
      num: 13,
      letter: "trece"
    },
    {
      num: 14,
      letter: "catorce"
    },
    {
      num: 15,
      letter: "quince"
    },
    {
      num: 16,
      letter: "dieciseis"
    },
    {
      num: 17,
      letter: "diecisiete"
    },
    {
      num: 18,
      letter: "dieciocho"
    },
    {
      num: 19,
      letter: "diecinueve"
    },
    {
      num: 20,
      letter: "veinte"
    },
    {
      num: 2,
      letter: "veinti"
    }
  ]

  private tenthNums: NumData[] = [
    {
      num: 3,
      letter: "treinta"
    },
    {
      num: 4,
      letter: "cuarenta"
    },
    {
      num: 5,
      letter: "cincuenta"
    },
    {
      num: 6,
      letter: "sesenta"
    },
    {
      num: 7,
      letter: "setenta"
    },
    {
      num: 8,
      letter: "ochenta"
    },
    {
      num: 9,
      letter: "noventa"
    }
  ]

  private hundredNums: NumData[] = [
    {
      num: 1,
      letter: "ciento"
    },
    {
      num: 2,
      letter: "doscientos"
    },
    {
      num: 3,
      letter: "trescientos"
    },
    {
      num: 4,
      letter: "cuatrocientos"
    },
    {
      num: 5,
      letter: "quinientos"
    },
    {
      num: 6,
      letter: "seicientos"
    },
    {
      num: 7,
      letter: "setecientos"
    },
    {
      num: 8,
      letter: "ochocientos"
    },
    {
      num: 9,
      letter: "novecientos"
    }
  ]

  letterNum: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async pressButton(num) {
    if (num == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debe ingresar un numero para buscar',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      if (parseInt(num) < 1 || parseInt(num) > 1000) {
        const alertRange = await this.alertController.create({
          header: 'Alerta',
          message: 'El numero estar entre 1 y 1000',
          buttons: ['OK']
        });
        await alertRange.present();
      }
      else {
        this.seekLetters(num.split('').reverse());
      }
    }
  }

  seekLetters(num) {
    this.letterNum = "";
    if (num[3]) {
      this.letterNum = "mil";
    }
    if (num[2]) {
      this.letterNum += this.getLetterByN(this.hundredNums, parseInt(num[2])) + " ";
    }
    if (num[1] && num[1] != 0) {
      const n = parseInt(num[1] + num[0]);
      if (n < 30) {
        if(n> 20)
          this.letterNum += this.getLetterByN(this.uniqNums, 2);
        else
          this.letterNum += this.getLetterByN(this.uniqNums, n) + " ";
      }
      else {
        this.letterNum += this.getLetterByN(this.tenthNums, parseInt(num[1])) + " ";
        if (num[0] != 0)
          this.letterNum += "y ";
      }
    }
    if (num[0] != 0 && num[1] != 1)
      this.letterNum += this.getLetterByN(this.unitNums, parseInt(num));
  }

  getLetterByN(list, num){
    return list.find(i => {
      return i.num === num;
    }).letter;
  }

}

export interface NumData {
  num: number,
  letter: string
}
