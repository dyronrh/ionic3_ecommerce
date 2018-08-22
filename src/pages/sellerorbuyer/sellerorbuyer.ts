import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { RegistrocompradorPage } from '../registrocomprador/registrocomprador';
import { IniciocompradorPage } from '../iniciocomprador/iniciocomprador';

/**
 * Generated class for the SellerorbuyerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellerorbuyer',
  templateUrl: 'sellerorbuyer.html',
})
export class SellerorbuyerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerorbuyerPage');
  }
  gotooption(){
    this.navCtrl.setRoot(WelcomePage)
  }
  gotoocomprador(){
    this.navCtrl.setRoot(IniciocompradorPage)
  }
}
