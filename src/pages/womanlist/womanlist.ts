import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { CategoriasmujerPage } from '../categoriasmujer/categoriasmujer';
import { CategoriashombrePage } from '../categoriashombre/categoriashombre';
import { CategoriasninoPage } from '../categoriasnino/categoriasnino';
import { DetallecategoriasPage } from '../detallecategorias/detallecategorias';
/**
 * Generated class for the WomanlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-womanlist',
  templateUrl: 'womanlist.html',
})
export class WomanlistPage {
  currentItems: Item[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WomanlistPage');
  }
  gotocategoriasmujer(){
    this.navCtrl.push(CategoriasmujerPage)
  }
  
  gotocategoriashombre(){
    this.navCtrl.push(CategoriashombrePage)
  }
  
  gotocategoriasnino(){
    this.navCtrl.push(CategoriasninoPage)
    localStorage.setItem('tipousuario','vendedor')
  }
  //=============
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
