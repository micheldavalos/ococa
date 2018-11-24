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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrehispanicoPage,
    PageTwoPage,
    ConquistaPage,
    ColoniaPage,
    IndependenciaPage,
    IndependientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    IndependientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
