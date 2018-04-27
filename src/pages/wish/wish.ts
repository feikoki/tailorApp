import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the WishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wish',
  templateUrl: 'wish.html',
})
export class WishPage {

  constructor(public navParams: NavParams, public view: ViewController) {
  }


  closeModal(){
    this.view.dismiss();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishPage');
  }

}
