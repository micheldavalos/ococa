import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PageTwoPage} from "../page-two/page-two";

/**
 * Generated class for the ConquistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conquista',
  templateUrl: 'conquista.html',
})
export class ConquistaPage {
  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
  }

  presentRadioPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(PageTwoPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

}
