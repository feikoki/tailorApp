import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishPage } from './wish';

@NgModule({
  declarations: [
    WishPage,
  ],
  imports: [
    IonicPageModule.forChild(WishPage),
  ],
})
export class WishPageModule {}
