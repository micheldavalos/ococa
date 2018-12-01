import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from "../pages/home/home";
import {DibujosPage} from "../pages/dibujos/dibujos";
import {RedesPage} from "../pages/redes/redes";
import {AboutPage} from "../pages/about/about";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  home = HomePage;
  dibujos: any = DibujosPage;
  redes = RedesPage;
  about = AboutPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, screen: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      screen.lock(screen.ORIENTATIONS.PORTRAIT_PRIMARY);
    });
  }

  openPage(page) {
    this.rootPage = page;
  }
}

