import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registrarvendedor4Page } from '../registrarvendedor4/registrarvendedor4';

/**
 * Generated class for the Registrarvendedor3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarvendedor3',
  templateUrl: 'registrarvendedor3.html',
})
export class Registrarvendedor3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrarvendedor3Page');
  }
  gotonext(){
    this.navCtrl.push(Registrarvendedor4Page)

  }
}
