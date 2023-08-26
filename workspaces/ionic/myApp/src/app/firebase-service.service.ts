import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public db:AngularFireDatabase ) { }

  save (course:any){
    this.db.list('courses').push(course).then(r => console.log(r));
  }


}
