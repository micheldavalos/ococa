import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PrehispanicoPage} from "../pages/prehispanico/prehispanico";
import {PageTwoPage} from "../pages/page-two/page-two";
import {ConquistaPage} from "../pages/conquista/conquista";
import {ColoniaPage} from "../pages/colonia/colonia";
import {IndependenciaPage} from "../pages/independencia/independencia";
import {IndependientePage} from "../pages/independiente/independiente";
import {DibujosPage} from "../pages/dibujos/dibujos";
import {RedesPage} from "../pages/redes/redes";
import {AboutPage} from "../pages/about/about";
import {ScreenOrientation} from "@ionic-native/screen-orientation";

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrehispanicoPage,
    PageTwoPage,
    ConquistaPage,
    ColoniaPage,
    IndependenciaPage,
    IndependientePage,
    DibujosPage,
    RedesPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ionicGalleryModal.GalleryModalModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrehispanicoPage,
    PageTwoPage,
    ConquistaPage,
    ColoniaPage,
    IndependenciaPage,
    IndependientePage,
    DibujosPage,
    RedesPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    }
  ]
})
export class AppModule {}
