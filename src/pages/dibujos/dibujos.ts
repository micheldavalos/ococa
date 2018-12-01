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
      this.pre.push({url: '../assets/imgs/jpg/pre_' + i + '.jpg', type: ''});
    }
    for (let i = 1; i <= 13; i++) {
      this.con.push({url: '../assets/imgs/jpg/con_' + i + '.jpg', type: ''});
    }
    for (let i = 1; i <= 10; i++) {
      this.col.push({url: '../assets/imgs/jpg/col_' + i + '.jpg', type: ''});
    }
    for (let i = 1; i <= 9; i++) {
      this.ind.push({url: '../assets/imgs/jpg/i_' + i + '.jpg', type: ''});
    }
    for (let i = 1; i <= 33; i++) {
      this.u.push({url: '../assets/imgs/jpg/u_' + i + '.jpg', type: ''});
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
  clickCon(image) {
    let index = this.con.findIndex(i => i == image);
    let modal = this.m.create(GalleryModal, {
      photos: this.con,
      initialSlide: index
    });
    modal.present();
  }
  clickCol(image) {
    let index = this.col.findIndex(i => i == image);
    let modal = this.m.create(GalleryModal, {
      photos: this.col,
      initialSlide: index
    });
    modal.present();
  }
  clickInd(image) {
    let index = this.ind.findIndex(i => i == image);
    let modal = this.m.create(GalleryModal, {
      photos: this.ind,
      initialSlide: index
    });
    modal.present();
  }
  clickU(image) {
      let index = this.u.findIndex(i => i == image);
      let modal = this.m.create(GalleryModal, {
        photos: this.u,
        initialSlide: index
      });
      modal.present();
    }

}
