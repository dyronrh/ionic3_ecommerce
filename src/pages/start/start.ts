import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { SellerorbuyerPage } from '../sellerorbuyer/sellerorbuyer';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
   
setTimeout(() => {
         this.navCtrl.setRoot(SellerorbuyerPage)
        }, 3000);
  }

}
