import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicadoraPageRoutingModule } from './multiplicadora-routing.module';

import { MultiplicadoraPage } from './multiplicadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicadoraPageRoutingModule
  ],
  declarations: [MultiplicadoraPage]
})
export class MultiplicadoraPageModule {}
