import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public loader;
  postagensDB;

  constructor(public loadingCtrl: LoadingController, public http: HttpClient) {}

  ionViewWillEnter(){
    this.pegarDadosFirebase();
  }

  async pegarDadosFirebase(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    loading.present();

    this.http.get('https://postagens-ec3c9-default-rtdb.firebaseio.com/postagens.json')
      .subscribe(data => {
        this.postagensDB = data;
        this.trataDados(data);
        loading.dismiss();
      });
  }

  trataDados(dados){
    this.postagensDB = Object.keys(dados).map(i => dados[i]).reverse(); // inverte a ordem das postagens
    console.log(this.postagensDB);
  }

  // função para recarregar a página
  doRefresh(event) {
    console.log('Iniciando recarga...');
    setTimeout(() => {
      console.log('Recarga finalizada.');
      this.pegarDadosFirebase();
      event.target.complete();
    }, 2000);
  }

}
