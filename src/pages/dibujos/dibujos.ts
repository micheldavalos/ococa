import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DibujosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dibujos',
  templateUrl: 'dibujos.html',
})
export class DibujosPage {
  dibujos = 'prehispanico';

  pre = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 1; i <= 23; i++) {
      this.pre.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DibujosPage');
  }

}
