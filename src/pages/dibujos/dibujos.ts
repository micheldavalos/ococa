import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public m: ModalController) {
    for (let i = 1; i <= 27; i++) {
      this.pre.push({url: '../assets/imgs/jpg/pre_' + i + '.jpg', type: 'Prehispánico'});
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

  clickPre(image) {
    let index = this.pre.findIndex(i => i == image);
    let modal = this.m.create(GalleryModal, {
      photos: this.pre,
      initialSlide: index
    });
    modal.present();
  }

}
