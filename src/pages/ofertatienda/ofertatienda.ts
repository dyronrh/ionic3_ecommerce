import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformaciontiendaPage } from '../informaciontienda/informaciontienda';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Registrarvendedor5Page } from '../registrarvendedor5/registrarvendedor5';
import { Registrovendedor6Page } from '../registrovendedor6/registrovendedor6';
import { DetallecategoriasPage } from '../detallecategorias/detallecategorias';
/**
 * Generated class for the OfertatiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ofertatienda',
  templateUrl: 'ofertatienda.html',
})
export class OfertatiendaPage implements OnInit{
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
   
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
      });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertatiendaPage');
  }
  gotoInformacion(){
    this.navCtrl.push(InformaciontiendaPage)
  }
  gotoOferta(){
    this.navCtrl.push(OfertatiendaPage)
  }
  gotoTodasCategorias(){
    this.navCtrl.push(DetallecategoriasPage)
  }
}
