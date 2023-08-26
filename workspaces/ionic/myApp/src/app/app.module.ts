import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {HttpModule} from "@angular/http"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfiguracoesPage } from './configuracoes/configuracoes.page';
import { SobrePage } from './sobre/sobre.page';
import { PerfilPage } from './perfil/perfil.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { SobrePageModule } from './sobre/sobre.module';
import { PerfilPageModule } from './perfil/perfil.module';
import { ConfiguracoesPageModule } from './configuracoes/configuracoes.module';
import { Tab1PageModule } from './tab1/tab1.module';
import { Tab2PageModule } from './tab2/tab2.module';
import { Tab3PageModule } from './tab3/tab3.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';




@NgModule({
  declarations: [AppComponent,PerfilPage],
  entryComponents: [PerfilPage],
  imports: [BrowserModule, IonicModule.forRoot(),HttpModule, IonicStorageModule.forRoot(), AppRoutingModule,ConfiguracoesPageModule,AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
