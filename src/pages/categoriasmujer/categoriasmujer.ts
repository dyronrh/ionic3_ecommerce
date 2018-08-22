import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallecategoriasPage } from '../detallecategorias/detallecategorias';

/**
 * Generated class for the CategoriasmujerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoriasmujer',
  templateUrl: 'categoriasmujer.html',
})
export class CategoriasmujerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasmujerPage');
  }
  gotoCategoriaDetailJeans(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Jeans"
    })
  }
  gotoCategoriaDetailPantalones(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Pantalones"
    })
  }
  gotoCategoriaDetailPantalonescorto(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Short y Calzas"
    })
  }
  gotoCategoriaDetailRemeras(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Remeras"
    })
  }
  gotoCategoriaDetailCamisas(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Vestidos"
    })
  }
  gotoCategoriaDetailBuzos(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Buzos"
    })
  }
  gotoCategoriaDetailCamperas(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Camperas"
    })
  }
  gotoCategoriaDetailRopaInterior(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Ropa Interior"
    })
  }
  gotoCategoriaDetailZapatos(){
    this.navCtrl.push(DetallecategoriasPage,{
      categoria: "Zapatos y otros"
    })
  }
}
