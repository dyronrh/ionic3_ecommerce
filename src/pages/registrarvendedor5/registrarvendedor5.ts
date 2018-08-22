import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the Registrarvendedor5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarvendedor5',
  templateUrl: 'registrarvendedor5.html',
})
export class Registrarvendedor5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrarvendedor5Page');
  }
  
  gotonext(){
    this.navCtrl.push(WelcomePage)

  }
}
