import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrocompradorPage } from '../registrocomprador/registrocomprador';
import { WelcomePage } from '../welcome/welcome';
import { DetallecategoriasPage } from '../detallecategorias/detallecategorias';
import { CategoriasmujerPage } from '../categoriasmujer/categoriasmujer';
import { WomanlistPage } from '../womanlist/womanlist';

/**
 * Generated class for the IniciocompradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciocomprador',
  templateUrl: 'iniciocomprador.html',
})
export class IniciocompradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciocompradorPage');
  }
  
  gotoRegistroComprador(){
    this.navCtrl.push(RegistrocompradorPage)
  }
  gotoVendedor(){
    this.navCtrl.push(WelcomePage)
    
  }
  login(){
    this.navCtrl.push(WomanlistPage)
    localStorage.setItem('tipousuario','comprador')
  }
}
