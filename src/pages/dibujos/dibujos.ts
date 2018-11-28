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
  con = [];
  col = [];
  ind = [];
  u   = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 1; i <= 27; i++) {
      this.pre.push(i);
    }
    for (let i = 1; i <= 13; i++) {
      this.con.push(i);
    }
    for (let i = 1; i <= 10; i++) {
      this.col.push(i);
    }
    for (let i = 1; i <= 9; i++) {
      this.ind.push(i);
    }
    for (let i = 1; i <= 33; i++) {
      this.u.push(i);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DibujosPage');
  }

}
