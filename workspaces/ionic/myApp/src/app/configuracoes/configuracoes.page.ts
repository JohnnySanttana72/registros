

import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';
import { MenuController, NavController, PopoverController, NavParams } from '@ionic/angular';
import { PerfilPageModule } from '../perfil/perfil.module';

@Component({
  selector: 'app-configuracoes',
  templateUrl: 'configuracoes.page.html',
  styleUrls: ['configuracoes.page.scss'],
  template: '<ion-nav id ="nav"[root]="rootPage"></ion-nav>'

})
export class ConfiguracoesPage {
  rootPage = PerfilPage;



  constructor() { }
  


  

  
  

}
