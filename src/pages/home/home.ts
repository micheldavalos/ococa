import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrehispanicoPage} from "../prehispanico/prehispanico";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prehispanico = PrehispanicoPage;
  constructor(public navCtrl: NavController) {

  }

  clickPrehispanico(e) {
    console.log('prehispanico');
    this.navCtrl.push(this.prehispanico);
  }

}
