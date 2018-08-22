import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaportiendaPage } from '../ofertaportienda/ofertaportienda';

/**
 * Generated class for the CrearproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearproducto',
  templateUrl: 'crearproducto.html',
})
export class CrearproductoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearproductoPage');
  }
gotoListaTienda(){

  this.navCtrl.push(OfertaportiendaPage)
}
}
