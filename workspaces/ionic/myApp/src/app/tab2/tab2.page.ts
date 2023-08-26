import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseServiceService } from '../firebase-service.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  depoimentos = {
    'colegio': '',
    'assunto': '',
    'depoimento': ''
    };


  todo = {}
  alertCtrl: any;

  constructor(public db : AngularFireDatabase,  public dbService: FirebaseServiceService,public alertController: AlertController,public navCtrl: NavController) {}
  logForm(todo) {
    this.db.database.ref('/logForm()').push({

    })
    .then(()=>{
      console.log('salvou');
    })
  }

  addTask(task : string){
    console.log(task);

  }

  save(depoimentos) {
    this.dbService.save(depoimentos);

    this.depoimentos.assunto= '';
    this.depoimentos.colegio = '';
    this.depoimentos.depoimento = '';
    this.presentAlert();
  }
    
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enviado',
      message: 'Depoimento Enviado com Sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }
 

  

}
