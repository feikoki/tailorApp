import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {Modal, ModalController, ModalOptions} from 'ionic-angular';
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController) {

  }

  openModal() {
    const myModal = this.modal.create('WishPage');
    myModal.present();
  }

}
