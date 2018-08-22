import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registrarvendedor5Page } from '../registrarvendedor5/registrarvendedor5';

/**
 * Generated class for the Registrovendedor6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrovendedor6',
  templateUrl: 'registrovendedor6.html',
})
export class Registrovendedor6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrovendedor6Page');
  }
  gotonext(){
    this.navCtrl.push(Registrarvendedor5Page)

  }
}
