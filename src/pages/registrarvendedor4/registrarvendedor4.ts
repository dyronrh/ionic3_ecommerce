import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Registrarvendedor5Page } from '../registrarvendedor5/registrarvendedor5';
/**
 * Generated class for the Registrarvendedor4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarvendedor4',
  templateUrl: 'registrarvendedor4.html',
})
export class Registrarvendedor4Page implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(  private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public navCtrl: NavController, 
    public navParams: NavParams) {
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

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Registrarvendedor4Page');
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  
  gotonext(){
    this.navCtrl.push(Registrarvendedor5Page)

  }
}
