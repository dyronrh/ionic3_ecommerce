import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WomanlistPage } from '../womanlist/womanlist';
import { Registrarvendedor1Page } from '../registrarvendedor1/registrarvendedor1';
import { IniciocompradorPage } from '../iniciocomprador/iniciocomprador';
import { TiendaPage } from '../tienda/tienda';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  login() {
   // this.navCtrl.setRoot(TiendaPage);
    this.navCtrl.setRoot(WomanlistPage);
    localStorage.setItem('tipousuario','vendedor')
  }

  signup() {
    this.navCtrl.push(Registrarvendedor1Page);
  }

  gotoComprador() {
    this.navCtrl.push(IniciocompradorPage);
  }
}
