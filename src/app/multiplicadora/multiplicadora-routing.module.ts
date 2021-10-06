import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicadoraPage } from './multiplicadora.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicadoraPageRoutingModule {}
