import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DibujosPage } from './dibujos';

@NgModule({
  declarations: [
    DibujosPage,
  ],
  imports: [
    IonicPageModule.forChild(DibujosPage),
  ],
})
export class DibujosPageModule {}
