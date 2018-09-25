import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrehispanicoPage} from "../prehispanico/prehispanico";
import {ConquistaPage} from "../conquista/conquista";
import {ColoniaPage} from "../colonia/colonia";
import {IndependenciaPage} from "../independencia/independencia";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prehispanico = PrehispanicoPage;
  conquista = ConquistaPage;
  colonia = ColoniaPage;
  independencia = IndependenciaPage;

  constructor(public navCtrl: NavController) {

  }

  clickPrehispanico(e) {
    //console.log('prehispanico');
    this.navCtrl.push(this.prehispanico);
  }

  clickConquista(e) {
    this.navCtrl.push(this.conquista);
  }

  clickColonia(e) {
    this.navCtrl.push(this.colonia);
  }

  clickIndependencia(e) {
    this.navCtrl.push(this.independencia);
  }

}
