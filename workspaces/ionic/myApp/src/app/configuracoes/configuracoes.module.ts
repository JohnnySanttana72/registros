

import { ConfiguracoesPage } from './configuracoes.page';



import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ConfiguracoesPage }])
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule {}

