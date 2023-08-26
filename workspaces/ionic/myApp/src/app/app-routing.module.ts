import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPageModule } from './tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' }
];
@NgModule({
  imports: [ TabsPageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
