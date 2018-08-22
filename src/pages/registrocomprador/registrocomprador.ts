import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrocompradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrocomprador',
  templateUrl: 'registrocomprador.html',
})
export class RegistrocompradorPage {
  models: any = {}
  provincias: any[] = [
    {name:'Buenos Aires'},
     {name: 'Catamarca'},
     {name: 'Chaco'},
     {name:'Chubut'},
     {name:'Córdoba'},
     {name:'Corrientes'},
     {name:'Entre Ríos'},
     {name:'Formosa'},
     {name:'Jujuy'},
     {name:'La Pampa'},
     {name:'La Rioja'},
     {name:'Mendoza'},
     {name:'Misiones'},
     {name:'Neuquén'},
     {name:'Río Negro'},
     {name:'Salta'},
     {name:'San Juan'},
     {name:'San Luis'},
     {name:'Santa Cruz'},
     {name:'Santa Fe'},
     {name:'Santiago del Estero'},
     {name:'Tierra del Fuego'},
     {name:'Antártida e Isla del Atlántico Sur'},
     {name:'Tucumán'}
     ]
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrocompradorPage');
  }

}
