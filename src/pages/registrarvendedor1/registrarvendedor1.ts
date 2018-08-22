import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registrarvendedor2Page } from '../registrarvendedor2/registrarvendedor2';

/**
 * Generated class for the Registrarvendedor1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarvendedor1',
  templateUrl: 'registrarvendedor1.html',
})
export class Registrarvendedor1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrarvendedor1Page');
  }

gotonext(){
  this.navCtrl.push(Registrarvendedor2Page)
}

}
