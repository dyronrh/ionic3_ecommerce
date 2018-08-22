import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearproductoPage } from '../crearproducto/crearproducto';

/**
 * Generated class for the TiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendaPage');
  }
gotoCrearProducto(){
  this.navCtrl.push(CrearproductoPage)
}
}
