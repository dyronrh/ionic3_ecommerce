import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertatiendaPage } from '../ofertatienda/ofertatienda';

/**
 * Generated class for the DetallecategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallecategorias',
  templateUrl: 'detallecategorias.html',
})
export class DetallecategoriasPage {
  nofiltro: Boolean = true
  rubrosactico: Boolean = false
  filtroactivo: Boolean = false;
  ordenaractivo: Boolean = false;
categoria: string=""
filtros: string=""
orden: string=""
rudbo: string=""
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.categoria = this.navParams.get('categoria')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallecategoriasPage');
  }
activarFiltro(){
  this.filtroactivo =true
  this.nofiltro=false
  this.rubrosactico=false
  this.ordenaractivo =false
}
activarRubro(){
  this.rubrosactico =true
  this.filtroactivo =false
  this.ordenaractivo =false
  this.nofiltro=false
}
activarOrden(){
  this.ordenaractivo =true
  this.rubrosactico =false
  this.filtroactivo =false
  this.nofiltro=false
}
filtraRubros(){
  this.rubrosactico =false
  this.filtroactivo =false
  this.ordenaractivo =false
  this.nofiltro=true
}
filtraFiltros(){
  this.rubrosactico =false
  this.filtroactivo =false
  this.ordenaractivo =false
  this.nofiltro=true
}
filtraOrden(){
  this.rubrosactico =false
  this.filtroactivo =false
  this.ordenaractivo =false
  this.nofiltro=true
}
gotoDetalleProducto(){
  this.navCtrl.push(OfertatiendaPage)
}
}
