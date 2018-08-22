import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { SellerorbuyerPage } from '../pages/sellerorbuyer/sellerorbuyer';
import { WomanlistPage } from '../pages/womanlist/womanlist';
import { Registrarvendedor1Page } from '../pages/registrarvendedor1/registrarvendedor1';
import { RegistrocompradorPage } from '../pages/registrocomprador/registrocomprador';
import { Registrarvendedor2Page } from '../pages/registrarvendedor2/registrarvendedor2';
import { Registrarvendedor3Page } from '../pages/registrarvendedor3/registrarvendedor3';

import { AgmCoreModule } from '@agm/core';
import { Registrarvendedor4Page } from '../pages/registrarvendedor4/registrarvendedor4';
import { Registrarvendedor5Page } from '../pages/registrarvendedor5/registrarvendedor5';
import { CategoriasmujerPage } from '../pages/categoriasmujer/categoriasmujer';
import { CategoriasninoPage } from '../pages/categoriasnino/categoriasnino';
import { CategoriashombrePage } from '../pages/categoriashombre/categoriashombre';
import { DetallecategoriasPage } from '../pages/detallecategorias/detallecategorias';
import { Registrovendedor6Page } from '../pages/registrovendedor6/registrovendedor6';
import { IniciocompradorPage } from '../pages/iniciocomprador/iniciocomprador';
import { TiendaPage } from '../pages/tienda/tienda';
import { CrearproductoPage } from '../pages/crearproducto/crearproducto';
import { OfertaportiendaPage } from '../pages/ofertaportienda/ofertaportienda';
import { OfertatiendaPage } from '../pages/ofertatienda/ofertatienda';
import { InformaciontiendaPage } from '../pages/informaciontienda/informaciontienda';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SellerorbuyerPage,
    WomanlistPage,
    Registrarvendedor1Page,

    Registrarvendedor2Page,
    RegistrocompradorPage,
    Registrarvendedor3Page,
    Registrarvendedor4Page,
    Registrarvendedor5Page,
    CategoriasmujerPage,
    CategoriasninoPage,
    CategoriashombrePage,
    DetallecategoriasPage,
    Registrovendedor6Page,
    IniciocompradorPage,
    TiendaPage,
    CrearproductoPage,
    OfertaportiendaPage,
    OfertatiendaPage,
    InformaciontiendaPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAy9Q3-psuAfbHrT0txaxIKhkpI_HiCxsI',
      libraries: ["places"]
    }),
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SellerorbuyerPage,
    WomanlistPage,
    Registrarvendedor1Page,
    Registrarvendedor2Page,
    RegistrocompradorPage,
    Registrarvendedor3Page,
    Registrarvendedor4Page,
    Registrarvendedor5Page,
    CategoriasmujerPage,
    CategoriasninoPage,
    CategoriashombrePage,
    DetallecategoriasPage,
    Registrovendedor6Page,
    IniciocompradorPage,
    TiendaPage,
    CrearproductoPage,
    OfertaportiendaPage,
    OfertatiendaPage,
    InformaciontiendaPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
