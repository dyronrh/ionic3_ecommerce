import { Component, ViewChild, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { WelcomePage } from '../pages/welcome/welcome';
import { DetallecategoriasPage } from '../pages/detallecategorias/detallecategorias';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header style="height: 200px;">
      <ion-toolbar *ngIf="tipousuario === 'vendedor'">
      
      </ion-toolbar>
      <ion-title style="margin-top:50px" *ngIf="tipousuario === 'vendedor'" >Nombre Tienda</ion-title>
      <ion-title *ngIf="tipousuario === 'vendedor'">Direccion Corta</ion-title>
      <ion-title *ngIf="tipousuario === 'vendedor'">Direccion Larga</ion-title>
    </ion-header>
   
    <ion-content>
    <ion-list *ngIf="tipousuario === 'vendedor'">
    <button menuClose ion-item (click)="openPage(p)">
    Modificar Perfil
    </button>
    <button menuClose ion-item (click)="openPage(p)">
    Contactanos
    </button>
    <button menuClose ion-item (click)="cerrarDetallesCompra()">
    Ver ofertas como Comprador
    </button>
    <button menuClose ion-item (click)="cerrarSesion()">
    Cerrar Sesion
    </button>
    </ion-list>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
      <ion-list *ngIf="tipousuario === 'comprador'">
        <button menuClose ion-item (click)="openPage(p)">
        Contáctenos
        </button>
        <button menuClose ion-item (click)="cerrarSesion()">
        Soy Vendedor
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp implements OnInit {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
  /*  { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }*/
  ]
tipousuario:string = ""
  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
this.tipousuario =  localStorage.getItem('tipousuario')
  }
ngOnInit(){
  this.tipousuario =  localStorage.getItem('tipousuario') 
}
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  cerrarSesion(){
    this.nav.push(WelcomePage)
  }
  cerrarDetallesCompra(){
    this.nav.push(DetallecategoriasPage)
  }
}
