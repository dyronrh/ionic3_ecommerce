import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registrarvendedor3Page } from '../registrarvendedor3/registrarvendedor3';

/**
 * Generated class for the Registrarvendedor2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarvendedor2',
  templateUrl: 'registrarvendedor2.html',
})
export class Registrarvendedor2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrarvendedor2Page');
  }
  
  gotonext(){
    this.navCtrl.push(Registrarvendedor3Page)
  }
}
